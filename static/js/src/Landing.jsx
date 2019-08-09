import React from 'react';
import ReactDOM from 'react-dom';
import {Area} from './Area.jsx'
import {Player} from './Player.jsx'

export class Landing extends React.Component {
  
  constructor() {
    super();
    this.state = {};
    this.state.currentLocation = 0;
    
    
  }
  
  componentDidMount() {
    console.log('landing loaded');
    let canvas = new fabric.Canvas('c');
    let area = new Area(this.state.currentLocation, canvas, this);
    this.player = new Player(0, canvas, this, area);
  }
  
  render() {
    return (
      <canvas id="c" width="1024" height="768"></canvas>
    );
  }
}