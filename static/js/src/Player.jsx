import {Globals} from './Globals.jsx'

export class Player {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.location = null;

    this.x = 0;
    this.y = 0;
    this.imgX = 40;
    this.imgY = 400;
    this.height = 0;
    this.width = 0;
    this.maxHeight = 0;
    this.maxWidth = 0;
    this.animatingCount = 0;
    
    this.stats = {};
    this.stats.speed = 8;
    
    this.isMoving = false;
    
    this.render();
  }
  
  render() {
    console.log('rend');
    let self = this;
    
    this.bumDefault = new Image();
    this.bumDefault.onload = function() {
      console.log('ld');
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      self.height = this.height;
      self.width = this.width;

      self.sprite = new fabric.Image(self.bumDefault, {
        left: self.imgX,
        top: self.imgY,
        selectable:false
      });
      self.canvas.add(self.sprite);
      window.dispatchEvent(new Event(Globals.EVENT_PLAYER_READY));
    };
    this.bumDefault.src = 'img/people/bum_default.png';
    
    this.bumLeft = new Image();
    this.bumLeft.src = 'img/people/bum_left.png';
    
    this.bumRight = new Image();
    this.bumRight.src = 'img/people/bum_right.png';
    
    this.bumUp = new Image();
    this.bumUp.src = 'img/people/bum_backwards.png';
  }
  
  resample() {
    console.log(this);
    this.scaleSpriteByYCoord(this.imgY + this.height);
      
    this.imgX = this.imgX + Math.abs(this.maxWidth - this.width);
    this.imgY = this.imgY + Math.abs(this.maxHeight - this.height);

    this.sprite.set('top', this.imgY);
    this.sprite.set('left', this.imgX);
    this.x = this.imgX + this.width/2;
    this.y = this.imgY + this.height;
    console.log(this.x, this.y);
    this.sprite.setCoords();
  }
  
  calculateSizeFromYPos(y) {
    let perc = (y-this.location.vanishingPoint)/(this.location.height - this.location.vanishingPoint);
    let newH = (this.maxHeight * perc);
    let newW = (this.maxWidth/this.maxHeight) * newH;
    return {w:newW, h:newH};
  }
  
  scaleSpriteByYCoord(y) {
    console.log('scaling', this);
    let oldH = this.height;
    let oldW = this.width;
    if (!oldH) {
      oldH = this.maxHeight;
    }
    if (!oldW) {
      oldW = this.maxWidth;
    }
    
    let size = this.calculateSizeFromYPos(y);
    console.log('sz', size);
    this.sprite.scaleToHeight(size.h);
    this.sprite.scaleToWidth(size.w);
    this.height = size.h;
    this.width = size.w;
    
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
      } else if (path[this.animatingCount][1] < this.getY()) {
        this.sprite.setElement(this.bumUp);
      } else if (path[this.animatingCount][0] > this.getY()) {
        this.sprite.setElement(this.bumDefault);
      } else {
        this.sprite.setElement(this.bumDefault);
      }
      
      this.scaleSpriteByYCoord(path[self.animatingCount][1]);
      this.sprite.animate('left', path[this.animatingCount][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[this.animatingCount][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas), onComplete: function() {
        self.animatingCount ++;
        self.animateWalk(path);
      }});
    } else {
      self.x = path[path.length-1][0];
      self.y = path[path.length-1][1];
      this.sprite.setElement(this.bumDefault);
      this.scaleSpriteByYCoord(path[path.length-1][1]);
      this.sprite.animate('left', path[path.length-1][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[path.length-1][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas)});
      //
      console.log('done');
      self.isMoving = false;
    }
  }
  
  walkRoute(path) {
    this.isMoving = true;
    this.animatingCount = 0;
    this.animateWalk(path);
  }
  
}