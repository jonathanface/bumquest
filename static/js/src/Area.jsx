import PF from 'pathfinding';
import {Globals} from './Globals.jsx'

export class Area {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
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
    
    this.enemies = [];
    
    //398px / 30 feet = 13.3
    this.height = 768;
    this.width = 1024;
    this.vanishingPoint = 202;
    
    this.walkPath;
    this.moveLine;
    this.moveText;
    
    this.combatOn = false;
    
    this.grid = null;
    this.pathfinder = new PF.DijkstraFinder({
      allowDiagonal: true,
      dontCrossCorners:false
    });
    this.renderBackground();
  }
  
  renderBackground() {
    
    let self = this;
    this.canvas.setBackgroundImage('img/areas/area01.png', function() {
      self.drawWalkpath();
      self.canvas.renderAll();
    });
  }
  
  generateWalkGrid() {
    let scaleW = Math.ceil(this.width/Globals.GRID_SQUARE_WIDTH);
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
        });*/
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
    console.log(this.grid);
  }
  
  findPath(ctx, start, end) {
    this.generateWalkGrid();
    try {
      console.log('grid', this.grid);
      return this.pathfinder.findPath(Math.ceil(start.x/Globals.GRID_SQUARE_WIDTH), Math.ceil(start.y/Globals.GRID_SQUARE_HEIGHT),
                                      Math.ceil(end.x/Globals.GRID_SQUARE_WIDTH), Math.ceil(end.y/Globals.GRID_SQUARE_HEIGHT), this.grid);
    } catch(e) {
      console.log(e);
    }

    //path = PF.Util.smoothenPath(this.grid, path);
    //path = PF.Util.expandPath(path);

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
    this.generateWalkGrid();
    this.walkPath.canvas.onclick = function(event) {
      let bounds = self.walkPath.canvas.getBoundingClientRect();
      let start = {};
      start.x = self.parent.state.player.getX();
      start.y = self.parent.state.player.getY();
      let end = {};
      end.x = Math.round(event.clientX - bounds.left);
      end.y = Math.round(event.clientY - bounds.top);
      if (self.walkPath.isPointInPath(end.x, end.y)) {
        let path = self.findPath(self.walkPath, start, end);
        if (path && path.length) {
          if (self.combatOn) {
            self.canvas.remove(self.moveLine);
            self.moveLine = null;
            self.canvas.remove(self.moveText);
            self.moveText = null;
            if (self.getPlayer().isMoving || path.length > self.getPlayer().stats.speed) {
              return;
            }
          }
          for (let i=0; i < path.length; i++) {
            path[i][0] *= Globals.GRID_SQUARE_WIDTH;
            path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
          }
          self.parent.state.player.walkRoute(path);
        }
      }
    };
    window.dispatchEvent(new Event(Globals.EVENT_AREA_READY));
  }
  
  getPlayer() {
    return this.parent.state.player;
  }
  
  determineCombatOrder() {
    let player = this.getPlayer();
    let order = [];
    this.enemies.sort((a, b) => (a.stats.speed > b.stats.speed) ? 1 : -1);
    let playerAdded = false;
    for (let i=0; i < this.enemies.length; i++) {
      if (this.enemies[i].stats.speed > player.stats.speed) {
        order.push(this.enemies[i]);
        if (i == this.enemies.length-1 && !playerAdded) {
          order.push(player);
        }
      } else {
        if (!playerAdded) {
          order.push(player);
          playerAdded = true;
        }
        order.push(this.enemies[i]);
      }
    }
    return order;
  }

  enterCombat() {
    let self = this;
    let player = this.getPlayer();
    if (player) {
      this.combatOn = true;
      self.parent.print("Some asshole is here!");
      this.canvas.on('mouse:out', function(event) {
        this.remove(self.moveLine);
        this.remove(self.moveText);
        self.moveLine = null;
        self.moveText = null;
      });

      this.canvas.on('mouse:move', function(event) {
        let start = {};
        start.x = player.getX();
        start.y = player.getY();
        if (!self.moveLine && !player.isMoving) {
          
          let coords = [start.x, start.y, start.x, start.y];
          self.moveLine = new fabric.Line(coords, {
            stroke: 'black',
            strokeWidth: 3,
            selectable:false
          });
          self.canvas.add(self.moveLine);
        }
        if (!self.moveText && !player.isMoving) {
          self.moveText = new fabric.Text('X', { left: 100, top: 100, fontFamily:'verdana,geneva,sans-serif', fontSize:18, fontWeight:'bold', fill:'green'});
          self.canvas.add(self.moveText);
        }
        let end = {};
        end.x = Math.round(event.pointer.x);
        end.y = Math.round(event.pointer.y);
        
        self.moveLine.set({'x2':end.x, 'y2':end.y});
        let textPos = Object.assign({}, end);
        textPos.x += 10;
        textPos.y -= 7;
        if (self.walkPath.isPointInPath(end.x, end.y)) {
          let path = self.findPath(self.walkPath, start, end);
          if (path && path.length) {
            self.moveText.set({text:path.length.toString(), left:textPos.x, top:textPos.y});
            if (path.length <= player.stats.speed) {
              self.moveLine.set({stroke:'green'});
              self.moveText.set({fill:'green'});
            } else {
              self.moveLine.set({stroke:'red'});
              self.moveText.set({fill:'red'});
            }
          } else {
            self.moveLine.set({stroke:'black'});
            self.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'black'});
          }
        } else {
          self.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'red'});
        }
        this.renderAll();
        
      });
      let order = this.determineCombatOrder();
      console.log('order', order);
    } else {
      //setTimeout(this.enterCombat.bind(this), 500);
    }
  }
}