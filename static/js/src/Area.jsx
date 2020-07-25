import {Globals} from './Globals.jsx'
import {Engine} from './Engine.jsx';
import PF from 'pathfinding';
import {CombatManager} from './CombatManager.jsx'
import worker from './PathfindWorker.jsx';
import WebWorker from './WebWorker.jsx';

export class Area extends Engine {
  
  constructor(id, canvas) {
    super();
    this.id = id;
    this.combat = null;
    this.loaderImg = new Image();
    console.log('init area with id', this.id);
    this.canvas = canvas;
    
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
  
  getPlayer() {
    for (let i=0; i < this.actors.length; i++) {
      if (this.actors[i].type = Globals.OBJECT_TYPE_PLAYER) {
        return this.actors[i];
      }
    }
    return null;
  }
  
  setupPathWorker() {
    this.PathWorker = new WebWorker(worker);
    this.PathWorker.postMessage({command:'generateWalkPath', path:this.walkPoints});
    this.PathWorker.addEventListener('message', event => {
      console.log('got ', event.data.command, 'back from worker');
      switch(event.data.command) {
        case 'clickedGround':
        case 'walkToObject':
          this.getPlayer().clickedGroundPathResults(event.data.path);
          break;
        case 'combatMouseMove':
          this.combat.combatMouseMoveResults(event.data);
          break;
        case 'playerCheckRange':
          if (event.data.path) {
            event.data.path = event.data.path.splice(0, event.data.path.length-1);
          }
          if (event.data.path && Math.ceil(event.data.path.length/4) > this.getPlayer().equipped.range) {
            print("You're out of range.");
            return;
          }
          if (!this.combatOn) {
            this.enterCombat('player');
          }
          this.combat.handlePlayerAttack(self.combat.getNPCByID(event.data.npc));
          break;
      }
    });
  }
  
  renderBackground() {
    console.log(this.canvas);
    this.canvas.setBackgroundImage('img/areas/area01.png', () => {
      console.log('rendering to', this);
      this.drawWalkpath();
      this.canvas.renderAll();
    });
  }
  
  findPath(obj) {
    obj.width = this.width;
    obj.height = this.height;
    obj.gridwidth = Globals.GRID_SQUARE_WIDTH;
    obj.gridheight = Globals.GRID_SQUARE_HEIGHT;
    obj.path = this.walkPoints;
    console.log(obj);
    this.PathWorker.postMessage(obj);
  }
  
  drawWalkpath() {
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
    this.walkPath.canvas.onclick = (event => {
      let player = this.getPlayer();
      if (player.targetAcquired) {
        return;
      }
      console.log('pl', player);
      player.cancelAnimations();
      let bounds = this.walkPath.canvas.getBoundingClientRect();
      let start = {};
      start.x = player.getX();
      start.y = player.getY();
      let end = {};
      end.x = Math.round(event.clientX - bounds.left);
      end.y = Math.round(event.clientY - bounds.top);
      if (this.walkPath.isPointInPath(end.x, end.y)) {
        let obj = {};
        obj.command = 'clickedGround';
        obj.start = start;
        obj.end = end;
        this.findPath(obj);
      }
    });
    this.loaderImg.dispatchEvent(new Event(Globals.EVENT_AREA_READY));
  }
  
  endCombatTurn() {
    if (this.combat) {
      this.combat.endPlayerTurn();
    }
  }
  
  enterCombat(initiated) {
    console.log('starting combat', this.player);
    if (this.player) {
      this.combatOn = true;
      this.combat = new CombatManager(this.player, this, initiated);
    }
  }
  
  exitCombat() {
    this.combatOn = false;
  }
}