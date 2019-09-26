import {Globals} from './Globals.jsx'
import {Weapon} from './Weapon.jsx'

export class NPC {
  
  constructor(id, canvas, parent) {
    this.type = Globals.OBJECT_TYPE_NPC;
    this.id = id;
    this.name = 'some asshole';
    this.description = 'someone who defies description';
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
    this.npcDefault = new Image();
    
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
    
    this.team = 3;
    this.targetAcquired = null;
    this.isMoving = false;
    this.usingMelee = true;
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
    //document.querySelector('img.equipped').src = this.equipped.img.src;
  }
  
  getEquippedWeapon() {
    return this.equipped;
  }
  
  render() {
    let self = this;
    
    this.npcDefault.onload = function() {
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      self.height = this.height;
      self.width = this.width;

      self.sprite = new fabric.Image(self.npcDefault, {
        left: self.imgX,
        top: self.imgY,
        selectable:false,
        hoverCursor:'arrow'
      });
      self.sprite.metadata = {};
      self.sprite.metadata = self;
      self.canvas.add(self.sprite);
      self.sprite.on('mouseover', function() {
        self.parent.print('You see: ' + Globals.ucwords(self.name) + '.');
        if (self.parent.state.currentArea.combatOn || self.parent.state.currentArea.getPlayer().isTargeting) {
          self.parent.state.currentArea.getPlayer().targetAcquired = this;
          this.hoverCursor='crosshair';
        }
      });
      self.sprite.on('mouseout', function() {
        self.parent.state.currentArea.getPlayer().targetAcquired = null;
        this.hoverCursor='arrow';
      });
      self.sprite.on('mouseup', function() {
        let enemyPos = {'x':self.getX(), 'y':self.getY()};
        let path = self.parent.state.currentArea.findPath({'x':self.parent.state.currentArea.getPlayer().getX(),
                                                           'y':self.parent.state.currentArea.getPlayer().getY()}, enemyPos);
        if (path) {
          path = path.splice(0, path.length-1);
        }
        if (path && Math.ceil(path.length/4) > self.parent.state.currentArea.getPlayer().equipped.range) {
          self.parent.print("You're out of range.");
          return;
        }
        if (!self.parent.state.currentArea.combatOn) {
          self.parent.state.currentArea.enterCombat('player');
        }
        self.parent.state.currentArea.combat.handlePlayerAttack(self);
      });
      this.dispatchEvent(new Event(Globals.EVENT_NPC_READY));
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
  
  adjustZPosition() {
    let myZ = this.canvas.getObjects().indexOf(this.sprite);
    for (let i=0; i < this.location.decor.length; i++) {
      if (Globals.isIntersecting(this.sprite, this.location.decor[i].sprite)) {
        let decorZ = this.canvas.getObjects().indexOf(this.location.decor[i].sprite);
        if (this.location.decor[i].getY() <= this.getY() && decorZ >= myZ) {
          this.sprite.moveTo(decorZ+1);
        } else if (this.location.decor[i].getY() > this.getY() && decorZ <= myZ) {
          this.sprite.moveTo(decorZ-1);
        }
      }
    }
    for (let i=0; i < this.location.actors.length; i++) {
      if (this.location.actors[i] == this) {
        continue;
      }
      if (Globals.isIntersecting(this.sprite, this.location.actors[i].sprite)) {
        let actorZ = this.canvas.getObjects().indexOf(this.location.actors[i].sprite);
        if (this.location.actors[i].getY() <= this.getY() && actorZ >= myZ) {
          this.sprite.moveTo(actorZ+1);
        } else if (this.location.actors[i].getY() > this.getY() && actorZ <= myZ) {
          this.sprite.moveTo(actorZ-1);
        }
      }
    }
    if (Globals.isIntersecting(this.sprite, this.location.getPlayer().sprite)) {
      let playerZ = this.canvas.getObjects().indexOf(this.location.getPlayer().sprite);
      if (this.location.getPlayer().getY() <= this.getY() && playerZ >= myZ) {
        this.sprite.moveTo(playerZ+1);
      } else if (this.location.getPlayer().getY() > this.getY() && playerZ <= myZ) {
        this.sprite.moveTo(playerZ-1);
      }
    }
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
      
      if (path[path.length-1][0] < path[path.length-2][0]) {
        self.sprite.setElement(self.npcLeft);
      } else if (path[path.length-1][0] > path[path.length-2][0]) {
        self.sprite.setElement(self.npcRight);
      } else if (path[path.length-1][1] < path[path.length-2][1]) {
        self.sprite.setElement(self.npcUp);
      } else if (path[path.length-1][1] > path[path.length-2][1]) {
        self.sprite.setElement(self.npcDefault);
      } else {
        self.sprite.setElement(self.npcDefault);
      }
      self.x = path[path.length-1][0];
      self.y = path[path.length-1][1];
      self.scaleSpriteByYCoord(path[path.length-1][1]);
      self.sprite.animate('left', path[path.length-1][0] - self.width/2, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas) });
      self.sprite.animate('top', path[path.length-1][1] - self.height, {duration:100, onChange: self.canvas.renderAll.bind(self.canvas)});
      if (callback) {
        callback();
      }
      self.isMoving = false;
    }
    this.adjustZPosition();
  }
  
  walkRoute(path, callback) {
    console.log('walkroute callback', callback);
    this.isMoving = true;
    this.animatingCount = 0;
    this.animateWalk(path, callback);
  }
  
}