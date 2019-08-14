import PF from 'pathfinding';
import {Globals} from './Globals.jsx'

export class Area {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    console.log('init area with id', this.id);
    
    this.walkPoints = [];
    this.walkPoints.push({x:1, y:673});
    this.walkPoints.push({x:329, y:673});
    this.walkPoints.push({x:440, y:373});
    this.walkPoints.push({x:508, y:373});
    this.walkPoints.push({x:658, y:673});
    this.walkPoints.push({x:1023, y:673});
    this.walkPoints.push({x:1023, y:767});
    this.walkPoints.push({x:1, y:767});
    this.walkPoints.push({x:1, y:673});
    this.stats = {};
    this.stats.ap = 8;
    this.stats.speed = 8;
    
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
    this.renderBackground();
  }
  
  renderBackground() {
    
    let self = this;
    this.canvas.setBackgroundImage('img/areas/area01.png', function() {
      self.drawWalkpath();
        /*
        self.walkPath = new fabric.Image(path, {
          selectable:false,
          left:0,
          top:0
        });
        self.walkPath.perPixelTargetFind = true;
        self.canvas.add(self.walkPath);
        self.walkPath.on('mouseup', function(event) {
          console.log('click', event);
          
          self.generateWalkGrid();
        });*/
        self.canvas.renderAll();
        
      });
    
    

  }
  
  /*
  isTouching(bmp1, bmp2) {
    console.log(bmp1);
    console.log('l', bmp1.top, bmp1.height);
    var canvasElement = document.getElementById('c');
    var ctx = canvasElement.getContext("2d");
    for (let i=bmp1.left; i < bmp1.left + bmp1.width; i++) {
      for (let s=bmp1.top; s < bmp1.top + bmp1.height; s++) {
        console.log(i, s);
        break;
        //var px = ctx.getImageData(i, s, 1, 1).data;
        //console.log(px);
      }
    }      
    /*
    
    
    rect.intersectsWithObject(this.walkPath)
    return false;
  }*/
  
  generateWalkGrid() {
    let scaleW = Math.floor(this.width/50);
    let scaleH = Math.floor(this.height/25);
    this.grid = new PF.Grid(scaleW, scaleH);
    for (let i=0; i < scaleW; i++) {
      for (let s=0; s < scaleH; s++) {
        /*
        let rect = new fabric.Rect({
          width:50,
          height:25,
          left:i * 50,
          top:s * 25,
          fill:'transparent',
          stroke:'green',
          strokeWidth:1,
          selectable:false,
          evented: false
        });*/
        if (this.walkPath.isPointInPath(i*50, s*25)) {
        //  console.log('pass');
          
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
    
    console.log('start', start);
    console.log('end', end);
    let scaleW = Math.floor(this.width/50);
    let scaleH = Math.floor(this.height/25);
    console.log('startx', Math.floor(start.x/50));
    console.log('starty', Math.floor(start.y/25));
    console.log('endx', Math.floor(end.x/50));
    console.log('endy', Math.floor(end.y/25));
    console.log(this.grid);

    try {
      return this.pathfinder.findPath(Math.floor(start.x/scaleW), Math.floor(start.y/scaleH),
                                      Math.floor(end.x/scaleW), Math.floor(end.y/scaleH, this.grid));
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
    //this.walkPath.globalAlpha = 0;
    this.walkPath.fill();
    this.walkPath.save();
    this.generateWalkGrid();
    this.walkPath.canvas.onclick = function(event) {
      if (!self.combatOn) {
        let bounds = self.walkPath.canvas.getBoundingClientRect();
        let start = {};
        start.x = self.parent.state.player.getX();
        start.y = self.parent.state.player.getY();
        let end = {};
        end.x = Math.round(event.clientX - bounds.left);
        end.y = Math.round(event.clientY - bounds.top);
        console.log(start, end);
        if (self.walkPath.isPointInPath(end.x, end.y)) {
          //console.log('in path');
          let path = self.findPath(self.walkPath, start, end);
          if (path && path.length) {
            self.parent.player.walkRoute(path);
          }
        } else {
          //console.log('out path');
        }
      }
    };
    window.dispatchEvent(new Event(Globals.EVENT_AREA_READY));
  }
  
  getPlayer() {
    return this.parent.state.player;
  }

  enterCombat() {
    let self = this;
    let player = this.getPlayer();
    console.log('pl', this.getPlayer());
    if (player) {
      this.combatOn = true;

      let start = {};
      start.x = player.getX();
      start.y = player.getY();
      let coords = [start.x, start.y, start.x, start.y];
      console.log(coords);
      let moveLine = new fabric.Line(coords, {
        stroke: 'red',
        strokeWidth: 3,
        selectable:false
      });
      this.canvas.add(moveLine);
      console.log('line', moveLine);
      
      this.canvas.on('mouse:move', function(event) {
        let end = {};
        end.x = Math.round(event.pointer.x);
        end.y = Math.round(event.pointer.y);
        moveLine.set({'x2':end.x, 'y2':end.y});
        let ctx = this.contextTop;
        if (ctx.isPointInPath(end.x, end.y)) {
          let path = self.findPath(ctx, start, end);
          console.log('path', path);
        }
        this.renderAll();
        
      });
    } else {
      //setTimeout(this.enterCombat.bind(this), 500);
    }
  }
}