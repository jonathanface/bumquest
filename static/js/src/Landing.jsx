import React from 'react';
import ReactDOM from 'react-dom';
import {Globals} from './Globals.jsx'
import {Area} from './Area.jsx'
import {Player} from './Player.jsx'
import {NPC} from './NPC.jsx'
import {Decor} from './Decor.jsx'

export class Landing extends React.Component {
  
  constructor() {
    super();
    this.state = {};
    this.currentLocation=0;
    this.player=null;

  }
  
  componentDidMount() {
    console.log('landing loaded');
    let canvas = new fabric.Canvas('c');
    this.player = new Player('43554018-c44b-11e9-bc97-0e49f1f8e77c', canvas, this);
    this.player.bumDefault.addEventListener(Globals.EVENT_PLAYER_READY, event = async() => {
      let dbInfo = await this.queryBackend('GET', Globals.API_DIR + 'area/' + '29c94708-c44c-11e9-bc97-0e49f1f8e77c');
      if (dbInfo) {
        this.currentLocation = dbInfo.id;
        this.currentArea = new Area(this.currentLocation, canvas, self);
        this.currentArea.loaderImg.addEventListener(Globals.EVENT_AREA_READY, async function(event) {
          this.currentArea.actors.push(this.player);
          this.player.location = this.currentArea;
          this.player.resample();
          
          let decorInfo = await this.queryBackend('GET', Globals.API_DIR + 'area/' + this.currentArea.id + '/decor');
          if (decorInfo) {
            console.log('decor', decorInfo);
            for (let i=0; i < decorInfo.length; i++) {
              let decor = new Decor(decorInfo[i], canvas, self);
              decor.render();
              this.currentArea.decor.push(decor);
            }
            let npcInfo = await this.queryBackend('GET', Globals.API_DIR + 'area/' + this.currentArea.id + '/npcs');
            if (npcInfo) {
              for (let i=0; i < npcInfo.length; i++) {
                let npc = new NPC(npcInfo[i].id, canvas, self);
                npc.name = npcInfo[i].name;
                npc.description = npcInfo[i].descr;
                npc.team = npcInfo[i].team;
                npc.imgX = npcInfo[i].x;
                npc.imgY = npcInfo[i].y;
                npc.npcDefault.addEventListener(Globals.EVENT_NPC_READY, function(event) {
                  npc.location = this.currentArea;
                  
                  this.currentArea.actors.push(npc);
                  npc.sprite.bringToFront();
                  npc.resample();
                  //this.state.currentArea.enterCombat();
                });
                npc.render();
                
              }
            }
            this.player.sprite.bringToFront();
          }

          document.querySelector('.upper-canvas').oncontextmenu = function(event) {
            event.preventDefault();
            let objectFound = false;
            let clickPoint = new fabric.Point(event.offsetX, event.offsetY);
            let clickedObjects = [];
            canvas.forEachObject(function (obj) {
              if (obj.containsPoint(clickPoint)) {
                clickedObjects.push(obj);
              }
            });
            clickedObjects.sort((a, b) => (canvas.getObjects().indexOf(a) < canvas.getObjects().indexOf(b)) ? 1 : -1)
            this.renderRightClickOptions(event, clickedObjects[0]);
          };
          
        });
        this.currentArea.renderBackground();
        
        this.print('You enter <b>' + dbInfo.name.toLowerCase() + '</b>.');
        this.print(dbInfo.description, true);
      }
    });
    this.player.render();
  }
  
  renderRightClickOptions(mouseinfo, element) {
    let menuTimeout = 2000;
    this.removeAllContextMenus();
    let div = document.createElement('div');
    div.oncontextmenu = function(e) { e.preventDefault(); return false; };
    div.classList.add('contextMenu');
    div.style.left = (mouseinfo.offsetX + document.querySelector('.canvas-container').offsetLeft) + 'px';
    div.style.top = mouseinfo.offsetY + 'px';
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(Globals.ucwords(element.metadata.name)));
    ul.appendChild(li);
    li = document.createElement('li');
    li.appendChild(document.createTextNode('View'));
    li.oncontextmenu = function() { return false; };
    li.onclick = () => {
      this.print(Globals.upperFirstChar(element.metadata.description));
      this.removeAllContextMenus();
    };
    ul.appendChild(li);
    if ((element.metadata.container || element.metadata.door) && !element.metadata.open) {
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Open'));
      li.oncontextmenu = function() { return false; };
      li.onclick = () => {
        this.player.tryToOpen(element.metadata);
        this.removeAllContextMenus();
      };
      ul.appendChild(li);
    } else if ((element.metadata.container || element.metadata.door) && element.metadata.open) {
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Close'));
      li.oncontextmenu = function() { return false; };
      li.onclick = () => {
        this.player.tryToClose(element.metadata);
        this.removeAllContextMenus();
      };
      ul.appendChild(li);
    }
    if (element.metadata.container) {
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Search'));
      li.oncontextmenu = function() { return false; };
      li.onclick = () => {
        this.player.tryToSearch(element.metadata);
        this.removeAllContextMenus();
      };
      ul.appendChild(li);
    }
    div.appendChild(ul);
    document.body.appendChild(div);
    let timer = setTimeout(function() {
      if (div && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }, menuTimeout);
    div.onmouseover = function() {
      clearTimeout(timer);
    };
    div.onmouseout = function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        if (div && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, menuTimeout);
    }
  }
  
  removeAllContextMenus() {
    let menus = document.querySelectorAll('.contextMenu');
    for (let i=0; i < menus.length; i++) {
      menus[i].parentNode.removeChild(menus[i]);
    }
  }
  
  endCombatTurn() {
    this.currentArea.endCombatTurn();
  }
  
  print(text) {
    let div = document.querySelector('.console');
    div.innerHTML += '<p>' + text + '</p>';
    div.innerHTML += '<p></p>';
    div.scrollTop = div.scrollHeight;
    
  }

  queryBackend(type, url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:type,
        headers: {
          'Content-Type':'application/json'
        }
      }).then(response => resolve(JSON.parse(this.response)))
      .catch(error => {
        reject({'code':this.status, 'message':JSON.parse(this.response).error});
      });
    });
    
    /*
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(type, url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function() {
        switch(this.status) {
          case 200:
            resolve(JSON.parse(this.response));
            break;
          default:
            reject({'code':this.status, 'message':JSON.parse(this.response).error});
        }
      };
      xhr.send();
    });*/
  }
  
  getTemplate(url, div) {
    return new Promise(function(resolve, reject) {
      fetch(Globals.TEMPLATE_DIR + url, {
        method:'GET',
        Headers: {
          'Content-Type': 'text/html'
        }
      }).then(response => {div.innerHTML = response; resolve();})
      .catch(error => {
        reject();
      });
    });
  }
  
  async showCharacterSheet() {
    if (!Globals.isShowingSheet) {
      Globals.isShowingSheet = true;
      let div = document.createElement('div');
      div.classList.add('sheet_holder');
      document.body.appendChild(div);
      await this.getTemplate('sheet.html', div);
      
      let closex = div.querySelector('header a');
      closex.onclick = this.showCharacterSheet;
      
      let stats = div.querySelectorAll('.base_stats .box');
      stats[0].innerHTML = this.player.stats.fortitude;
      stats[1].innerHTML = this.player.stats.attention;
      stats[2].innerHTML = this.player.stats.charisma;
      stats[3].innerHTML = this.player.stats.intelligence;
      stats[4].innerHTML = this.player.stats.agility;
      stats[5].innerHTML = this.player.stats.luck;
      stats[6].innerHTML = this.player.stats.strength;
      
      let skills = div.querySelectorAll('.skills .value');
      skills[0].innerHTML = this.player.skills.beggin + '%';
      skills[1].innerHTML = this.player.skills.shootin + '%';
      skills[2].innerHTML = this.player.skills.scrappin + '%';
      skills[3].innerHTML = this.player.skills.wrappin + '%';
      skills[4].innerHTML = this.player.skills.fixin + '%';
      skills[5].innerHTML = this.player.skills.learnin + '%';
      skills[6].innerHTML = this.player.skills.rantin + '%';
      skills[7].innerHTML = this.player.skills.shittin + '%';
      skills[8].innerHTML = this.player.skills.sleepin + '%';
      
      let derived = div.querySelectorAll('.stats_info .value');
      derived[0].innerHTML = this.player.stats.tolerance + '%';
      derived[1].innerHTML = this.player.stats.speed;
      let smellData = this.player.getSmellLabel(this.player.stats.smell);
      derived[2].style.color = smellData[1];
      derived[2].innerHTML = smellData[0];
    } else {
      Globals.isShowingSheet = false;
      document.body.removeChild(document.body.querySelector('.sheet_holder'));
    }
  }
  
  enterTargetingMode() {
    this.currentArea.player.isTargeting = !this.currentArea.player.isTargeting;
  }
  
  render() {
    return (
      <div>
        <canvas id="c" width="1024" height="768"></canvas>
        <div className="controls">
          <div className="console"></div>
          <div className="vertical_bar">
            <a onClick={this.showCharacterSheet.bind(this)}>INFO</a>
            <a onClick={this.endCombatTurn.bind(this)}>END TURN</a>
            <a>POCKETS</a>
          </div>
          <div className="center_stats">
            <label htmlFor="movement_points">Movement Points:</label>
            <span id="movement_points"></span>
            <div className="weaponBox">
              <a>
                <img className="equipped" onClick={this.enterTargetingMode.bind(this)}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}