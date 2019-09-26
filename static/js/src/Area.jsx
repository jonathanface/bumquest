import PF from 'pathfinding';
import {Globals} from './Globals.jsx'
import {CombatManager} from './CombatManager.jsx'
import worker from './AnimationWorker.jsx';
import WebWorker from './WebWorker.jsx';

export class Area {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.combat = null;
    this.loaderImg = new Image();
    console.log('init area with id', this.id);
    
    this.walkPoints = [];
    this.walkPoints.push({x:0, y:673});
    this.walkPoints.push({x:329, y:673});
    this.walkPoints.push({x:440, y:373});
    this.walkPoints.push({x:508, y:373});
    this.walkPoints.push({x:658, y:673});
    this.walkPoints.push({x:1023, y:673});
    this.walkPoints.push({x:1023, y:767});
    this.walkPoints.push({x:0, y:767});
    this.walkPoints.push({x:0, y:673});
    
    this.actors = [];
    this.decor = [];
    
    //398px / 30 feet = 13.3
    this.height = 768;
    this.width = 1024;
    this.vanishingPoint = 202;
    
    this.walkPath;
    
    this.combatOn = false;
    
    this.grid = null;
    this.pathfinder = new PF.DijkstraFinder({
      allowDiagonal: true,
      dontCrossCorners:false
    });
    
    
  }
  
  renderBackground() {
    
    let self = this;
    this.canvas.setBackgroundImage('img/areas/area01.png', function() {
      self.drawWalkpath();
      self.canvas.renderAll();
    });
  }
  /*
  generateWalkGrid() {
    let scaleW = Math.ceil(this.width/Globals.GRID_SQUARE_WIDTH*4);
    let scaleH = Math.ceil(this.height/Globals.GRID_SQUARE_HEIGHT);
    this.grid = new PF.Grid(scaleW, scaleH);
    for (let i=0; i < scaleW; i++) {
      for (let s=0; s < scaleH; s++) {
        /*
        let rect = new fabric.Rect({
          width:Globals.GRID_SQUARE_WIDTH,
          height:Globals.GRID_SQUARE_HEIGHT,
          left:i * Globals.GRID_SQUARE_WIDTH,
          top:s * Globals.GRID_SQUARE_HEIGHT,
          fill:'transparent',
          stroke:'green',
          strokeWidth:1,
          selectable:false,
          evented: false
        });
        if (this.walkPath.isPointInPath(i*Globals.GRID_SQUARE_WIDTH, s*Globals.GRID_SQUARE_HEIGHT)) {
        //  console.log('pass');
          this.grid.setWalkableAt(i, s, true);
          
        } else {
         // console.log('impass');
          this.grid.setWalkableAt(i, s, false);
          //rect.stroke = 'red';
        }
        //this.canvas.add(rect);
      }
    }
  }*/
  
  findPath(start, end) {
    //console.log('frompath', start, 'end', end);
    let self = this;
    let obj = {};
    obj.command = 'findpath';
    obj.start = start;
    obj.end = end;
    obj.width = this.width;
    obj.height = this.height;
    obj.gridwidth = Globals.GRID_SQUARE_WIDTH;
    obj.gridheight = Globals.GRID_SQUARE_HEIGHT;
    obj.path = this.walkPoints;
    console.log(obj);
    this.AnimationWorker = new WebWorker(worker);
    this.AnimationWorker.addEventListener('message', event => {
      if (event.data.command == 'path_results') {
        self.getPlayer().findPathResults(event.data.type, event.data.grid);
      }
    });
    this.AnimationWorker.postMessage(obj);
    /*
    this.generateWalkGrid();
    try {
      return this.pathfinder.findPath(Math.round(start.x/Globals.GRID_SQUARE_WIDTH), Math.round(start.y/Globals.GRID_SQUARE_HEIGHT),
                                      Math.round(end.x/Globals.GRID_SQUARE_WIDTH), Math.round(end.y/Globals.GRID_SQUARE_HEIGHT), this.grid);
    } catch(e) {
      console.log(e);
      return false;
    }*/
  }
  
  drawWalkpath() {

    let self = this;
    this.walkPath = this.canvas.contextTop;
    
    this.walkPath.beginPath();
    this.walkPath.moveTo(this.walkPoints[0].x, this.walkPoints[0].y);
    for (let i=1; i < this.walkPoints.length; i++) {
      this.walkPath.lineTo(this.walkPoints[i].x, this.walkPoints[i].y);
    }
    this.walkPath.closePath();
    this.walkPath.fillStyle = "#7fffd4";
    this.walkPath.globalAlpha = 0;
    this.walkPath.fill();
    this.walkPath.save();
    //this.generateWalkGrid();
    this.walkPath.canvas.onclick = function(event) {
      if (self.getPlayer().targetAcquired) {
        return;
      }
      self.getPlayer().cancelAnimations();
      let bounds = self.walkPath.canvas.getBoundingClientRect();
      let start = {};
      start.x = self.parent.state.player.getX();
      start.y = self.parent.state.player.getY();
      let end = {};
      end.x = Math.round(event.clientX - bounds.left);
      end.y = Math.round(event.clientY - bounds.top);
      if (self.walkPath.isPointInPath(end.x, end.y)) {
        let path = self.findPath(start, end);
        
        if (path && path.length) {
          if (self.combatOn) {
            self.canvas.remove(self.combat.moveLine);
            self.combat.moveLine = null;
            self.canvas.remove(self.combat.moveText);
            self.combat.moveText = null;
            
            if (self.getPlayer().isMoving || Math.ceil(path.length/4) > self.getPlayer().remainingMoves) {
              return;
            }
          }
          for (let i=0; i < path.length; i++) {
            path[i][0] *= Globals.GRID_SQUARE_WIDTH;
            path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
          }
          self.getPlayer().walkRoute(path);
        }
      }
    };
    this.loaderImg.dispatchEvent(new Event(Globals.EVENT_AREA_READY));
  }
  
  getPlayer() {
    return this.parent.state.player;
  }
  
  endCombatTurn() {
    if (this.combat) {
      this.combat.endPlayerTurn();
    }
  }
  
  enterCombat(initiated) {
    let self = this;
    let player = this.getPlayer();
    console.log('starting combat', player);
    if (player) {
      this.combatOn = true;
      this.combat = new CombatManager(player, this, initiated);
      
    }
  }
  
  exitCombat() {
    this.combatOn = false;
  }
}