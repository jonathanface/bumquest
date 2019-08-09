export class Player {
  
  constructor(id, canvas, parent, area) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.location = area;

    this.x = 40;
    this.y = 700;
    this.height = 0;
    this.width = 0;
    this.maxHeight = 0;
    this.maxWidth = 0;
    this.animatingCount = 0;
    
    this.render();
  }
  
  render() {
    let self = this;
    
    this.bumDefault = new Image();
    this.bumDefault.onload = function() {
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      
      self.setX(self.x);
      self.setY(self.y);
      self.sprite = new fabric.Image(self.bumDefault, {
        left: self.x - this.width/2,
        top: self.y - this.height,
        selectable:false
      });
      self.scaleSpriteByYCoord(self.y);
      self.sprite.set('top', (self.y + Math.abs(self.maxHeight - self.height)) - self.height);
      self.sprite.set('left', self.x + Math.abs(self.maxWidth - self.width));
      self.sprite.setCoords();
      self.canvas.renderAll();
      
      self.canvas.add(self.sprite);
    };
    this.bumDefault.src = 'img/people/bum_default.png';
    
    this.bumLeft = new Image();
    this.bumLeft.src = 'img/people/bum_left.png';
    
    this.bumRight = new Image();
    this.bumRight.src = 'img/people/bum_right.png';
    
    this.bumUp = new Image();
    this.bumUp.src = 'img/people/bum_backwards.png';
  }
  
  calculateSizeFromYPos(y) {
    let perc = (y-this.location.vanishingPoint)/(this.location.height - this.location.vanishingPoint);
    let newH = (this.maxHeight * perc);
    let newW = (this.maxWidth/this.maxHeight) * newH;
    return {w:newW, h:newH};
  }
  
  scaleSpriteByYCoord(y) {
    let oldH = this.height;
    let oldW = this.width;
    if (!oldH) {
      oldH = this.maxHeight;
    }
    if (!oldW) {
      oldW = this.maxWidth;
    }
    
    let size = this.calculateSizeFromYPos(y);
    this.sprite.scaleToHeight(size.h);
    this.sprite.scaleToWidth(size.w);
    this.height = size.h;
    this.width = size.w;
  }
  
  setX(x) {
    if (x < 0) {
      x = 0;
    }
    if (x > this.canvas.width) {
      x = this.canvas.width - this.width;
    }
    this.x = x;
  }
  
  setY(y) {
    if (y < 0) {
      y = 0;
    }
    if (y > this.canvas.height) {
      y = this.canvas.height;
    }
    this.y = y;
  }
  
  getX() {
    return Math.round(this.x);
  }
  
  getY() {
    return Math.round(this.y);
  }
  
  animateWalk(path) {
    let self = this;
    if (this.animatingCount < path.length) {
      
      if (path[this.animatingCount][0] < this.getX()) {
        this.sprite.setElement(this.bumLeft);
      } else if (path[this.animatingCount][0] > this.getX()) {
        this.sprite.setElement(this.bumRight);
      } else if (path[this.animatingCount][1] > this.getY()) {
        this.sprite.setElement(this.bumUp);
      } else if (path[this.animatingCount][0] > this.getY()) {
        this.sprite.setElement(this.bumDefault);
      } else {
        this.sprite.setElement(this.bumDefault);
      }
      
      this.scaleSpriteByYCoord(path[self.animatingCount][1]);
      this.sprite.animate('left', path[this.animatingCount][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[this.animatingCount][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas), onComplete: function() {
        self.animatingCount += 100;
        self.animateWalk(path);
      }});
    } else {
      self.setX(path[path.length-1][0]);
      self.setY(path[path.length-1][1]);
      this.sprite.setElement(this.bumDefault);
      this.scaleSpriteByYCoord(path[path.length-1][1]);
      this.sprite.animate('left', path[path.length-1][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[path.length-1][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas)});
      //
      console.log('done');
    }
  }
  
  walkRoute(path) {
    this.animatingCount = 0;
    this.animateWalk(path);
  }
  
}