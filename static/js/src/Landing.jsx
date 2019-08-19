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
    window.addEventListener(Globals.EVENT_PLAYER_READY, function(event) {
      console.log('ready', event);
      window.addEventListener(Globals.EVENT_AREA_READY, function(event) {
        self.print("You enter a seedy-looking street.");
        
        
        window.addEventListener(Globals.EVENT_NPC_READY, function(event) {
          npc.location = self.state.currentArea;
          npc.resample();
          npc.location.enemies.push(npc);
        });
        let npc = new NPC(0, canvas, this);
      });
      self.state.currentArea = new Area(self.state.currentLocation, canvas, self);
      self.state.player.location = self.state.currentArea;
      self.state.player.resample();
      self.state.currentArea.enterCombat();
    });
    this.state.player = new Player(0, canvas, this);
  }
  
  print(text) {
    let currText = document.querySelector('.console').innerHTML;
    document.querySelector('.console').innerHTML = '<p>' + text + '</p>' + currText;
  }
  
  render() {
    return (
      <div>
        <canvas id="c" width="1024" height="768"></canvas>
        <div className="controls">
          <div className="console">
          </div>
        </div>
      </div>
    );
  }
}