import PF from 'pathfinding';

export class Area {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.imgURL = 'img/areas/area01.png';
    console.log('init area with id', this.id);
    
    this.walkPoints = [];
    this.walkPoints.push({x:0, y:673});
    this.walkPoints.push({x:329, y:673});
    this.walkPoints.push({x:440, y:373});
    this.walkPoints.push({x:508, y:373});
    this.walkPoints.push({x:658, y:673});
    this.walkPoints.push({x:1024, y:673});
    this.walkPoints.push({x:1024, y:768});
    this.walkPoints.push({x:0, y:768});
    
    this.stats = {};
    this.stats.ap = 8;
    this.stats.speed = 8;
    
    //398px / 30 feet = 13.3
    this.height = 768;
    this.width = 1024;
    this.vanishingPoint = 280;
    
    this.walkPath;
    
    this.combatOn = false;
    
    this.grid = null;
    this.pathfinder = new PF.DijkstraFinder({
      allowDiagonal: true,
      dontCrossCorners:false
    });
    this.renderBackground();
    
    this.enterCombat();
  }
  
  renderBackground() {
    let self = this;
    
    this.canvas.setBackgroundImage('img/areas/area01.png', function() {
      self.canvas.renderAll.bind(self.canvas);
      self.drawWalkpath();
    });
  }
  
  generateWalkGrid(walkPath) {
    
    this.grid = new PF.Grid(this.width, this.height);
    
    for (let i=0; i < this.width; i++) {
      for (let s=0; s < this.height; s++) {
        //walkPath.fillStyle = "#00FF00";
        if (!walkPath.isPointInPath(i, s)) {
          //walkPath.fillStyle = "#FF0000";
          this.grid.setWalkableAt(i, s, false);
        }
        //walkPath.fillRect( i, s, 1, 1 );
      }
    }
  }
  
  findPath(ctx, start, end) {
    this.generateWalkGrid(ctx);

    try {
      
      return this.pathfinder.findPath(start.x, start.y, end.x, end.y, this.grid);
    } catch(e) {
      console.log(e);
    }

    //path = PF.Util.smoothenPath(this.grid, path);
    //path = PF.Util.expandPath(path);

  }
  
  drawWalkpath() {
    let self = this;
    let ctx = this.canvas.contextTop;
    
    ctx.beginPath();
    ctx.moveTo(this.walkPoints[0].x, this.walkPoints[0].y);
    for (let i=1; i < this.walkPoints.length; i++) {
      ctx.lineTo(this.walkPoints[i].x, this.walkPoints[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = "#FF0000";
    ctx.globalAlpha = 0;
    ctx.fill();
    ctx.save();
    this.generateWalkGrid(ctx);
    ctx.canvas.onclick = function(event) {
      if (!self.combatOn) {
        let bounds = ctx.canvas.getBoundingClientRect();
        let start = {};
        start.x = self.parent.player.getX();
        start.y = self.parent.player.getY();
        let end = {};
        end.x = Math.round(event.clientX - bounds.left);
        end.y = Math.round(event.clientY - bounds.top);
        if (ctx.isPointInPath(end.x, end.y)) {
          let path = self.findPath(ctx, start, end);
          if (path && path.length) {
            self.parent.player.walkRoute(path);
          }
        }
      }
    };
  }
  
  drawBoard(canvasContext, width, height) {
    let hexagonAngle = 0.523598776; // 30 degrees in radians
    let sideLength = 36;
    let hexHeight = Math.sin(hexagonAngle) * sideLength;
    let hexRadius = Math.cos(hexagonAngle) * sideLength;
    let hexRectangleHeight = sideLength + 2 * hexHeight;
    let hexRectangleWidth = 2 * hexRadius;

    
    var i,j;
    for(i = 0; i < width; ++i) {
      for(j = height; j >= 0; --j) {
        //console.log('j', j);
        this.drawHexagon(canvasContext, i * hexRectangleWidth + ((j % 2) * hexRadius), j * (sideLength + hexHeight), false,
                         hexRadius, hexRectangleHeight, hexRectangleWidth, hexHeight, sideLength);
      }
    }
  }

  drawHexagon(canvasContext, x, y, fill, hexRadius, hexRectangleHeight, hexRectangleWidth, hexHeight, sideLength) {
    fill = fill || false;
    canvasContext.beginPath();
    canvasContext.moveTo(x + hexRadius, y);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
    canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
    canvasContext.lineTo(x, y + sideLength + hexHeight);
    canvasContext.lineTo(x, y + hexHeight);
    canvasContext.closePath();
    if(fill) {
      canvasContext.fill();
    } else {
      canvasContext.stroke();
    }
  }
  
  renderCombatGrid() {
    let self = this;
    let ctx = this.canvas.contextTop;
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#CCCCCC";
    ctx.lineWidth = 1;

    let hexagonAngle = 0.523598776; // 30 degrees in radians
    let sideLength = 36;
    let hexHeight = Math.sin(hexagonAngle) * sideLength;
    let hexRadius = Math.cos(hexagonAngle) * sideLength;
    console.log('rad', hexRadius);
    console.log('h', hexHeight);
    
    let boardWidth = Math.round(this.width / sideLength);
    console.log(boardWidth);
    let boardHeight = Math.round((this.height) / sideLength);
    console.log(boardHeight);
    this.drawBoard(ctx, boardWidth, boardHeight);

    ctx.canvas.addEventListener("mousemove", function(eventInfo) {
      /*
      var x,
          y,
          hexX,
          hexY,
          screenX,
          screenY;

      x = eventInfo.offsetX || eventInfo.layerX;
      y = eventInfo.offsetY || eventInfo.layerY;

        
      hexY = Math.floor(y / (hexHeight + sideLength));
      hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

      screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
      screenY = hexY * (hexHeight + sideLength);

      //ctx.clearRect(0, 0, self.width, self.height);

      self.drawBoard(ctx, boardWidth, boardHeight);

      // Check if the mouse's coords are on the board
      if(hexX >= 0 && hexX < boardWidth) {
        if(hexY >= 0 && hexY < boardHeight) {
          ctx.fillStyle = "#000000";
          self.drawHexagon(ctx, screenX, screenY, true);
        }
      }
      */
    });
  }
  
  enterCombat() {
    let self = this;
    this.combatOn = true;
    console.log(this.canvas);
    let ctx = this.canvas.contextCache;
    ctx.canvas.addEventListener('mousemove', function(event) {
      let bounds = ctx.canvas.getBoundingClientRect();
      let start = {};
      start.x = self.parent.player.getX();
      start.y = self.parent.player.getY();
      let end = {};
      end.x = Math.round(event.clientX - bounds.left);
      end.y = Math.round(event.clientY - bounds.top);
      
      console.log(start, end);
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      let line = ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.stroke();
      console.log('line', line);
      console.log(event);
    });
    
  }
}