import React from 'react';
import ReactDOM from 'react-dom';
import {Globals} from './Globals.jsx'
import {Area} from './Area.jsx'
import {Player} from './Player.jsx'
import {NPC} from './NPC.jsx'

export class Landing extends React.Component {
  
  constructor() {
    super();
    this.state = {};
    this.state.currentLocation = 0;
    this.state.player = null;
    
  }
  
  componentDidMount() {
    console.log('landing loaded');
    let self = this;
    let canvas = new fabric.Canvas('c');
    this.state.player = new Player(0, canvas, this);
    this.state.player.bumDefault.addEventListener(Globals.EVENT_PLAYER_READY, async function(event) {
      let dbInfo = await self.queryBackend('GET', Globals.API_DIR + 'area/' + '29c94708-c44c-11e9-bc97-0e49f1f8e77c');
      if (dbInfo) {
        self.state.currentLocation = dbInfo.id;
        self.state.currentArea = new Area(self.state.currentLocation, canvas, self);
        self.state.currentArea.loaderImg.addEventListener(Globals.EVENT_AREA_READY, function(event) {
          self.state.currentArea.actors.push(self.state.player);
          let npc = new NPC(0, canvas, self);
          npc.npcDefault.addEventListener(Globals.EVENT_NPC_READY, function(event) {
            npc.location = self.state.currentArea;
            npc.resample();
            npc.location.actors.push(npc);
            self.print('Some asshole is here!');
          });
          npc.render();
          
          self.state.player.location = self.state.currentArea;
          self.state.player.resample();
        });
        self.state.currentArea.renderBackground();
        self.print(dbInfo.description);
        self.print('You enter <b>' + dbInfo.name.toLowerCase() + '</b>.');
        
      }
      
    });
    this.state.player.render();
    
  }
  
  endCombatTurn() {
    this.state.currentArea.endCombatTurn();
  }
  
  print(text) {
    let currText = document.querySelector('.console').innerHTML;
    document.querySelector('.console').innerHTML = '<p>' + text + '</p>' + currText;
  }
  
  queryBackend(type, url) {
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
            reject();
        }
      };
      xhr.send();
    });
  }
  
  getTemplate(url, div) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', Globals.TEMPLATE_DIR + url, true);
      xhr.setRequestHeader("Content-Type", "text/html");
      xhr.onload = function() {
        switch(this.status) {
          case 200:
            div.innerHTML = xhr.response;
            resolve();
            break;
          default:
            reject();
        }
      };
      xhr.send();
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
    this.state.currentArea.getPlayer().isTargeting = !this.state.currentArea.getPlayer().isTargeting;
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