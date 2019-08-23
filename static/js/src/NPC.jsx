import {Globals} from './Globals.jsx'

export class NPC {
  
  constructor(id, canvas, parent) {
    this.type = 'npc';
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.location = null;

    this.x = 0;
    this.y = 0;
    this.imgX = 900;
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
    this.stats.tolerance = this.stats.fortitude*5;
    this.stats.smell = Math.round(this.stats.charisma/2);
    
    this.remainingMoves = this.stats.speed;
    
    this.skills = {};
    this.skills.beggin = 5 + (this.stats.charisma + this.stats.attention);
    this.skills.shootin = 5 + (this.stats.attention);
    this.skills.scrappin = 5 + (this.stats.strength + this.stats.attention);
    this.skills.wrappin = 5 + (this.stats.attention + this.stats.intelligence);
    this.skills.fixin = 5 + (this.stats.intelligence + this.stats.agility);
    this.skills.learnin = 5 + (this.stats.intelligence);
    this.skills.rantin = 5 + (this.stats.intelligence + this.stats.attention);
    this.skills.shittin = 5 + (this.stats.fortitude + this.stats.charisma);
    this.skills.sleepin = 5 + (this.stats.fortitude);
    
    this.armed = 0;
    
    this.isMoving = false;
    this.usingMelee = true;
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
    
  }

  
  getX() {
    return Math.round(this.x);
  }
  
  getY() {
    return Math.round(this.y);
  }
  
  animateWalk(path, callback) {
    let self = this;
    if (self.animatingCount < path.length) {
      if (path[self.animatingCount][0] < self.getX()) {
        self.sprite.setElement(self.npcLeft);
      } else if (path[self.animatingCount][0] > self.getX()) {
        self.sprite.setElement(self.npcRight);
      } else if (path[self.animatingCount][1] < self.getY()) {
        self.sprite.setElement(self.npcUp);
      } else if (path[self.animatingCount][0] > self.getY()) {
        self.sprite.setElement(self.npcDefault);
      } else {
        self.sprite.setElement(self.npcDefault);
      }
      if (this.getY() > this.location.getPlayer().getY()) {
        this.sprite.bringToFront();
      } else {
        this.sprite.sendToBack();
      }
      //console.log('mv', path[self.animatingCount][0] - self.width/2, path[self.animatingCount][1] - self.height);
      self.scaleSpriteByYCoord(path[self.animatingCount][1]);
      self.sprite.animate('left', path[self.animatingCount][0] - self.width/2, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas) });
      self.sprite.animate('top', path[self.animatingCount][1] - self.height, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas), onComplete: function() {
        self.animatingCount++;
        if (self.animatingCount%4 === 0) {
          self.remainingMoves--;
          console.log('rem', self.remainingMoves);
        }
        self.animateWalk(path, callback);
      }});
    } else {
      self.remainingMoves--;
      self.x = path[path.length-1][0];
      self.y = path[path.length-1][1];
      self.sprite.setElement(self.npcDefault);
      self.scaleSpriteByYCoord(path[path.length-1][1]);
      self.sprite.animate('left', path[path.length-1][0] - self.width/2, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas) });
      self.sprite.animate('top', path[path.length-1][1] - self.height, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas)});
      console.log('done', path[path.length-1][0] - self.width/2, path[path.length-1][1] - self.height);
      
      //force moves end until I build in combat
      console.log('callback', callback);
      if (callback) {
        callback();
      }
      
      self.isMoving = false;
    }
  }
  
  attack() {
    console.log('npc attacking!');
    this.remainingMoves=0;
    
    switch(this.weapon) {
      case 1:
        //knife
        break;
      case 2:
        //club
        break;
      case 3:
        //pistol
        break;
      case 4:
        //shotgun
        break;
      case 5:
        //rifle
        break;
      case 6:
        //submachinegun
        break;
      case 7:
        //machinegun
        break;
      default:
        //fists
    }
  }
  
  walkRoute(path, callback) {
    console.log('walkroute callback', callback);
    this.isMoving = true;
    this.animatingCount = 0;
    this.animateWalk(path, callback);
  }
  
}