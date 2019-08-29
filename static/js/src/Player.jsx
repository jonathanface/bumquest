import {Globals} from './Globals.jsx'
import {Weapon} from './Weapon.jsx'

export class Player {
  
  constructor(id, canvas, parent) {
    this.type = Globals.OBJECT_TYPE_PLAYER;
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
    this.bumDefault = new Image();
    
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
    this.stats.tolerance = this.stats.fortitude*5;
    this.stats.smell = Math.round(this.stats.charisma/2);
    this.stats.hp = 50 + this.stats.fortitude;
    this.stats.ac = 5 + Math.round(this.stats.agility/2 + this.stats.fortitude/2);
    this.stats.critical = this.stats.luck;
    
    this.remainingMoves = this.stats.speed;
    
    this.skills = {};
    this.skills.beggin = 5 + (this.stats.charisma + this.stats.attention);
    this.skills.shootin = 5 + (this.stats.attention);
    this.skills.scrappin = 50 + (this.stats.strength + this.stats.attention);
    this.skills.wrappin = 5 + (this.stats.attention + this.stats.intelligence);
    this.skills.fixin = 5 + (this.stats.intelligence + this.stats.agility);
    this.skills.learnin = 5 + (this.stats.intelligence);
    this.skills.rantin = 5 + (this.stats.intelligence + this.stats.attention);
    this.skills.shittin = 5 + (this.stats.fortitude + this.stats.charisma);
    this.skills.sleepin = 5 + (this.stats.fortitude);

    this.isMoving = false;
    
    this.inventory = [];
    
    let self = this;
    let fist = new Weapon('b1ae51b1-c9b9-11e9-bc97-0e49f1f8e77c', this.parent);
    fist.img.addEventListener(Globals.EVENT_WEAPON_READY, function(event) {
      self.stow(fist);
      self.equip(fist);
    });
    fist.load();
  }
  
  stow(item) {
    this.inventory.push(item);
  }
  
  drop(item) {
    if (!this.inventory.includes(item)) {
      return;
    }
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }
  
  equip(item) {
    if (item.type != Globals.OBJECT_TYPE_WEAPON) {
      return;
    }
    if (!this.inventory.includes(item)) {
      return;
    }
    this.equipped = item;
    document.querySelector('img.equipped').src = this.equipped.img.src;
  }
  
  getEquippedWeapon() {
    return this.equipped;
  }
  
  getSmellLabel(smell) {
    let smells = ['NOXIOUS', 'DISGUSTING', 'FOUL', 'NOT GREAT', 'MILD'];
    let colors = ['#f55442', '#f5c242', '#eff542', '#b9f542', '#42f57b'];
    console.log('sml', smell);
    return [smells[smell], colors[smell]];
  }
  
  
  render() {
    console.log('rend');
    let self = this;
    this.bumDefault.onload = function() {
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      self.height = this.height;
      self.width = this.width;

      self.sprite = new fabric.Image(self.bumDefault, {
        left: self.imgX,
        top: self.imgY,
        selectable:false,
        hoverCursor:'arrow'
      });
      self.canvas.add(self.sprite);
      this.dispatchEvent(new Event(Globals.EVENT_PLAYER_READY));
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
    
    //this.y = y + this.height;
    //this.x = this.x + this.width/2;
  }

  
  getX() {
    return Math.round(this.x);
  }
  
  getY() {
    return Math.round(this.y);
  }

  updateMovementPointsDisplay(value) {
    document.querySelector('#movement_points').innerHTML = value;
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
      for (let i=0; i < this.location.enemies.length; i++) {
        console.log('eny', this.location.enemies[i].getY(), 'playerY', this.getY());
        if (this.location.enemies[i].getY() <= this.getY()) {
          this.sprite.bringToFront();
        } else {
          this.sprite.sendToBack();
        }
      }
      this.scaleSpriteByYCoord(path[self.animatingCount][1]);
      this.sprite.animate('left', path[this.animatingCount][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[this.animatingCount][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas), onComplete: function() {
        self.animatingCount++;
        if (self.animatingCount%4 === 0) {
          self.remainingMoves--;
          self.updateMovementPointsDisplay(self.remainingMoves);
        }
        self.animateWalk(path);
      }});
    } else {
      self.x = path[path.length-1][0];
      self.y = path[path.length-1][1];
      this.sprite.setElement(this.bumDefault);
      
      this.sprite.animate('left', path[path.length-1][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[path.length-1][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas)});
      this.scaleSpriteByYCoord(path[path.length-1][1]);
      //
      console.log('done', path[path.length-1][0] - this.width/2, path[path.length-1][1] - this.height);
      //this.x = Math.round(path[path.length-1][0] + this.width/2);
      //this.y = Math.round(path[path.length-1][1] + this.height);
      //console.log(this.x, this.y);
      self.isMoving = false;
      self.remainingMoves--;
      if (self.remainingMoves < 0) {
        self.remainingMoves = 0;
      }
      self.updateMovementPointsDisplay(self.remainingMoves);
    }
  }
  
  walkRoute(path) {
    this.isMoving = true;
    this.animatingCount = 0;
    this.animateWalk(path);
  }

}