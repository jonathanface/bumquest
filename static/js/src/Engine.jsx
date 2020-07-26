
import {Globals} from './Globals.jsx';
export class Engine {
  
  constructor() {
    this.player = null;
    this.currentArea = null;
    this.canvas = new fabric.Canvas('c', {
      fireRightClick: true,
      stopContextMenu: true
    });
    this.canvas.on('object:added', (e) => {
      console.log('Event after:render Triggered');
      console.log(e);
      
      e.target.on('mouseover', () => {
        if (e.target.metadata) {
          this.print('You see: ' + Globals.ucwords(e.target.metadata.name) + '.');
          if (this.currentArea.combatOn || this.player.isTargeting) {
            console.log('targeting npc');
            this.player.targetAcquired = e.target.metadata;
            e.target.hoverCursor='crosshair';
          }
        }
      });
      e.target.on('mouseout', () => {
        if (e.target.metadata && this.player.targetAcquired == e.target.metadata) {
          this.player.targetAcquired = null;
          e.target.hoverCursor='arrow';
        }
      });
      
      e.target.on('mouseup', (me) => {
        switch(me.button) {
          case 1:
            if (me.target.metadata && me.target.metadata.type == Globals.OBJECT_TYPE_NPC) {
              let enemyPos = {'x':me.target.metadata.getX(), 'y':me.target.metadata.getY()};
              let obj = {};
              obj.command = 'playerCheckRange';
              obj.npc = me.target.metadata.id;
              obj.start = {'x':this.player.getX(), 'y':this.player.getY()};
              obj.end = enemyPos;
              this.currentArea.findPath(obj);
            }
            break;
          case 3:
            if (me.target.metadata) {
              this.renderRightClickOptions(me);
            }
            break;
        }
      });
    });
    
    this.characterSheet = {};
    this.characterSheet.stats = {};
    /*F.A.C.I.A.L.S
    Fortitude
    Agility
    Charisma
    Intelligence
    Attention
    Luck
    Strength*/
    this.characterSheet.stats.fortitude = 5;
    this.characterSheet.stats.agility = 5;
    this.characterSheet.stats.charisma = 5;
    this.characterSheet.stats.intelligence = 5;
    this.characterSheet.stats.attention = 5;
    this.characterSheet.stats.luck = 5;
    this.characterSheet.stats.strength = 5;
    
    //derived stats
    this.characterSheet.stats.speed = (this.characterSheet.stats.agility/2) + (this.characterSheet.stats.attention/2);
    this.characterSheet.stats.tolerance = this.characterSheet.stats.fortitude*5;
    this.characterSheet.stats.smell = Math.round(this.characterSheet.stats.charisma/2);
    this.characterSheet.stats.hp = 50 + this.characterSheet.stats.fortitude;
    this.characterSheet.stats.ac = 5 + Math.round(this.characterSheet.stats.agility/2 + this.characterSheet.stats.fortitude/2);
    this.characterSheet.stats.critical = this.characterSheet.stats.luck;

    this.characterSheet.traits = {};
    this.characterSheet.traits.autism = false;
    
    this.characterSheet.skills = {};
    this.characterSheet.skills.beggin = 5 + (this.characterSheet.stats.charisma + this.characterSheet.stats.attention);
    this.characterSheet.skills.shootin = 5 + (this.characterSheet.stats.attention);
    this.characterSheet.skills.scrappin = 5 + (this.characterSheet.stats.strength + this.characterSheet.stats.attention);
    this.characterSheet.skills.wrappin = 5 + (this.characterSheet.stats.attention + this.characterSheet.stats.intelligence);
    this.characterSheet.skills.fixin = 5 + (this.characterSheet.stats.intelligence + this.characterSheet.stats.agility);
    this.characterSheet.skills.learnin = 5 + (this.characterSheet.stats.intelligence);
    this.characterSheet.skills.rantin = 5 + (this.characterSheet.stats.intelligence + this.characterSheet.stats.attention);
    this.characterSheet.skills.shittin = 5 + (this.characterSheet.stats.fortitude + this.characterSheet.stats.charisma);
    this.characterSheet.skills.sleepin = 5 + (this.characterSheet.stats.fortitude);
  }
  
  renderRightClickOptions(mouseinfo) {
    console.log('render right click');
    let element = mouseinfo.target;
    let menuTimeout = 2000;
    this.removeAllContextMenus();
    let div = document.createElement('div');
    div.oncontextmenu = function(e) { e.preventDefault(); return false; };
    div.classList.add('contextMenu');
    console.log('mouse', mouseinfo);
    div.style.left = (mouseinfo.absolutePointer.x + document.querySelector('.canvas-container').offsetLeft) + 'px';
    div.style.top = mouseinfo.absolutePointer.y + 'px';
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
      stats[0].innerHTML = this.state.player.stats.fortitude;
      stats[1].innerHTML = this.state.player.stats.attention;
      stats[2].innerHTML = this.state.player.stats.charisma;
      stats[3].innerHTML = this.state.player.stats.intelligence;
      stats[4].innerHTML = this.state.player.stats.agility;
      stats[5].innerHTML = this.state.player.stats.luck;
      stats[6].innerHTML = this.state.player.stats.strength;
      
      let skills = div.querySelectorAll('.skills .value');
      skills[0].innerHTML = this.state.player.skills.beggin + '%';
      skills[1].innerHTML = this.state.player.skills.shootin + '%';
      skills[2].innerHTML = this.state.player.skills.scrappin + '%';
      skills[3].innerHTML = this.state.player.skills.wrappin + '%';
      skills[4].innerHTML = this.state.player.skills.fixin + '%';
      skills[5].innerHTML = this.state.player.skills.learnin + '%';
      skills[6].innerHTML = this.state.player.skills.rantin + '%';
      skills[7].innerHTML = this.state.player.skills.shittin + '%';
      skills[8].innerHTML = this.state.player.skills.sleepin + '%';
      
      let derived = div.querySelectorAll('.stats_info .value');
      derived[0].innerHTML = this.state.player.stats.tolerance + '%';
      derived[1].innerHTML = this.state.player.stats.speed;
      let smellData = this.state.player.getSmellLabel(this.state.player.stats.smell);
      derived[2].style.color = smellData[1];
      derived[2].innerHTML = smellData[0];
    } else {
      Globals.isShowingSheet = false;
      document.body.removeChild(document.body.querySelector('.sheet_holder'));
    }
  }
  
  enterTargetingMode() {
    this.currentArea.getPlayer().isTargeting = !this.currentArea.getPlayer().isTargeting;
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
    console.log('querying ' + url);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:type,
        headers: {
          'Content-Type':'application/json'
        }
      }).then(response => {
        if (!response.ok) {
          reject({'code':response.status, 'message':response.statusText});
        }
        response.json().then(json => {
          console.log(json);
          resolve(json);
        }).catch(error=>reject(JSON.parse(error)));
      }).catch(error=>reject(JSON.parse(error)));
    }).catch(error => console.log(error));
  }
  
  getTemplate(url, div) {
    return new Promise(function(resolve, reject) {
      fetch(Globals.TEMPLATE_DIR + url, {
        method:'GET',
        Headers: {
          'Content-Type': 'text/html'
        }
      }).then(response => {div.innerHTML = response; resolve();})
      .catch(error => console.log(error));
    });
  }
  
}