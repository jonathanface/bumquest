import React from 'react';
import ReactDOM from 'react-dom';
import {Globals} from './Globals.jsx'
import {Area} from './Area.jsx'
import {Player} from './Player.jsx'

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
      self.state.currentArea = new Area(self.state.currentLocation, canvas, self);
      self.state.player.location = self.state.currentArea;
      self.state.player.resample();
      self.state.currentArea.enterCombat();
    });
    this.state.player = new Player(0, canvas, this);
    
    
    
  }
  
  render() {
    return (
      <canvas id="c" width="1024" height="768"></canvas>
    );
  }
}