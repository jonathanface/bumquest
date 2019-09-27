import PF from 'pathfinding';
import {Globals} from './Globals.jsx'
import {CombatManager} from './CombatManager.jsx'
import worker from './PathfindWorker.jsx';
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
    
    this.setupPathWorker();
    
  }
  
  setupPathWorker() {
    this.PathWorker = new WebWorker(worker);
    this.PathWorker.postMessage({command:'generateWalkPath', path:this.walkPoints});
    let self = this;
    this.PathWorker.addEventListener('message', event => {
      console.log('got ', event.data.command, 'back from worker');
      if (event.data.command == 'clickedGround' || event.data.command == 'walkToObject') {
        self.getPlayer().clickedGroundPathResults(event.data.path);
      }
      if (event.data.command == 'combatMouseMove') {
        console.log('comb', self.combat);
        self.combat.combatMouseMoveResults(event.data);
      }
      if (event.data.command == 'playerCheckRange') {
        if (event.data.path) {
          event.data.path = event.data.path.splice(0, event.data.path.length-1);
        }
        if (event.data.path && Math.ceil(event.data.path.length/4) > self.getPlayer().equipped.range) {
          self.parent.print("You're out of range.");
          return;
        }
        if (!self.combatOn) {
          self.enterCombat('player');
        }
        self.combat.handlePlayerAttack(self.combat.getNPCByID(event.data.npc));
      }
    });
  }
  
  renderBackground() {
    
    let self = this;
    this.canvas.setBackgroundImage('img/areas/area01.png', function() {
      self.drawWalkpath();
      self.canvas.renderAll();
    });
  }
  
  findPath(obj) {
    //console.log('frompath', start, 'end', end);
    let self = this;
    obj.width = this.width;
    obj.height = this.height;
    obj.gridwidth = Globals.GRID_SQUARE_WIDTH;
    obj.gridheight = Globals.GRID_SQUARE_HEIGHT;
    obj.path = this.walkPoints;
    //console.log(obj);
    
    this.PathWorker.postMessage(obj);
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
        let obj = {};
        obj.command = 'clickedGround';
        obj.start = start;
        obj.end = end;
        self.findPath(obj);
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