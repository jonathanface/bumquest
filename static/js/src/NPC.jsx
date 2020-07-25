import {Globals} from './Globals.jsx'
import {Engine} from './Engine.jsx';
import {Weapon} from './Weapon.jsx'

export class NPC extends Engine {
  
  constructor(id, canvas) {
    super();
    this.type = Globals.OBJECT_TYPE_NPC;
    this.id = id;
    this.name = 'some asshole';
    this.description = 'someone who defies description';
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
    this.sheet = {...this.characterSheet};
    this.team = 3;
    this.targetAcquired = null;
    this.isMoving = false;
    this.usingMelee = true;
    this.inventory = [];
    
    let fist = new Weapon('b1ae51b1-c9b9-11e9-bc97-0e49f1f8e77c');
    fist.img.addEventListener(Globals.EVENT_WEAPON_READY, event = () => {
      this.equip(fist);
      this.stow(fist);
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
    this.npcDefault.onload = () => {
      this.maxWidth = this.npcDefault.width;
      this.maxHeight = this.npcDefault.height;
      this.height = this.npcDefault.height;
      this.width = this.npcDefault.width;

      this.sprite = new fabric.Image(this.npcDefault, {
        left: this.imgX,
        top: this.imgY,
        selectable:false,
        hoverCursor:'arrow'
      });
      this.sprite.metadata = {};
      this.sprite.metadata = this;
      this.canvas.add(this.sprite);
      this.sprite.on('mouseover', () => {
        this.print('You see: ' + Globals.ucwords(this.name) + '.');
        if (this.location.combatOn || this.location.getPlayer().isTargeting) {
          this.location.getPlayer().targetAcquired = this;
          this.hoverCursor='crosshair';
        }
      });
      this.sprite.on('mouseout', () => {
        this.location.getPlayer().targetAcquired = null;
        this.hoverCursor='arrow';
      });
      this.sprite.on('mouseup', () => {
        let enemyPos = {'x':this.getX(), 'y':this.getY()};
        let obj = {};
        obj.command = 'playerCheckRange';
        obj.npc = this.id;
        obj.start = {'x':this.location.getPlayer().getX(), 'y':this.location.getPlayer().getY()};
        obj.end = enemyPos;
        this.location.findPath(obj);
      });
      this.npcDefault.dispatchEvent(new Event(Globals.EVENT_NPC_READY));
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
    if (this.animatingCount < path.length) {
      if (path[this.animatingCount][0] < this.getX()) {
        this.sprite.setElement(this.npcLeft);
      } else if (path[this.animatingCount][0] > this.getX()) {
        this.sprite.setElement(this.npcRight);
      } else if (path[this.animatingCount][1] < this.getY()) {
        this.sprite.setElement(this.npcUp);
      } else if (path[this.animatingCount][0] > this.getY()) {
        this.sprite.setElement(this.npcDefault);
      }
      
      //console.log('mv', path[this.animatingCount][0] - this.width/2, path[this.animatingCount][1] - this.height);
      this.scaleSpriteByYCoord(path[this.animatingCount][1]);
      this.sprite.animate('left', path[this.animatingCount][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[this.animatingCount][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas), onComplete: () => {
        this.animatingCount++;
        if (this.animatingCount%4 === 0) {
          this.remainingMoves--;
          console.log('rem', this.remainingMoves);
        }
        this.animateWalk(path, callback);
      }});
    } else {
      this.remainingMoves--;
      
      if (path[path.length-1][0] < path[path.length-2][0]) {
        this.sprite.setElement(this.npcLeft);
      } else if (path[path.length-1][0] > path[path.length-2][0]) {
        this.sprite.setElement(this.npcRight);
      } else if (path[path.length-1][1] < path[path.length-2][1]) {
        this.sprite.setElement(this.npcUp);
      } else if (path[path.length-1][1] > path[path.length-2][1]) {
        this.sprite.setElement(this.npcDefault);
      } else {
        this.sprite.setElement(this.npcDefault);
      }
      this.x = path[path.length-1][0];
      this.y = path[path.length-1][1];
      this.scaleSpriteByYCoord(path[path.length-1][1]);
      this.sprite.animate('left', path[path.length-1][0] - this.width/2, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top', path[path.length-1][1] - this.height, {duration:100, onChange: this.canvas.renderAll.bind(this.canvas)});
      if (callback) {
        callback();
      }
      this.isMoving = false;
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