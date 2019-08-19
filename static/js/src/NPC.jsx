import {Globals} from './Globals.jsx'

export class NPC {
  
  constructor(id, canvas, parent) {
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.location = null;

    this.x = 0;
    this.y = 0;
    this.imgX = 950;
    this.imgY = 400;
    this.height = 0;
    this.width = 0;
    this.maxHeight = 0;
    this.maxWidth = 0;
    this.animatingCount = 0;
    
    this.stats = {};
    /*F.A.C.I.A.L.S
    Fortitude
    Agility
    Charisma
    Intelligence
    Attention
    Luck
    Strength*/
    this.stats.fortitude = 5;
    this.stats.agility = 5;
    this.stats.charisma = 5;
    this.stats.intelligence = 5;
    this.stats.attention = 5;
    this.stats.luck = 5;
    this.stats.strength = 5;
    
    //derived stats
    this.stats.speed = (this.stats.agility/2) + (this.stats.attention/2);
    this.stats.luckModifier = this.stats.luck/100;
    
    this.isMoving = false;
    this.render();
  }
  
  render() {
    let self = this;
    
    this.npcDefault = new Image();
    this.npcDefault.onload = function() {
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      self.height = this.height;
      self.width = this.width;

      self.sprite = new fabric.Image(self.npcDefault, {
        left: self.imgX,
        top: self.imgY,
        selectable:false
      });
      self.canvas.add(self.sprite);
      window.dispatchEvent(new Event(Globals.EVENT_NPC_READY));
    };
    this.npcDefault.src = 'img/people/generic_enemy.png';
    
    this.npcLeft = new Image();
    this.npcLeft.src = 'img/people/generic_enemy_left.png';
    
    this.npcRight = new Image();
    this.npcRight.src = 'img/people/generic_enemy_right.png';
    
    this.npcUp = new Image();
    this.npcUp.src = 'img/people/generic_enemy_backwards.png';
  }
  
  resample() {
    console.log('smple', this);
    this.scaleSpriteByYCoord(this.imgY + this.height);
      
    this.imgX = this.imgX + Math.abs(this.maxWidth - this.width);
    this.imgY = this.imgY + Math.abs(this.maxHeight - this.height);

    this.sprite.set('top', this.imgY);
    this.sprite.set('left', this.imgX);
    this.x = this.imgX + this.width/2;
    this.y = this.imgY + this.height;
    this.sprite.setCoords();
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