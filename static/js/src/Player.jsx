import {Globals} from './Globals.jsx'
import {Engine} from './Engine.jsx';
import {Weapon} from './Weapon.jsx'

export class Player extends Engine {
  
  constructor(id, canvas) {
    super();
    this.type = Globals.OBJECT_TYPE_PLAYER;
    this.id = id;
    this.location;
    this.canvas = canvas;
    this.name = 'you';
    this.description = "you've seen better days, for sure";

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
    
    this.animInterval;
    
    this.sheet = {...this.characterSheet};
    
    this.remainingMoves = this.characterSheet.stats.speed;

    this.isMoving = false;
    this.isTargeting = false;
    this.targetAcquired = null;
    
    this.inventory = [];
    this.team = 1;

    let fist = new Weapon('b1ae51b1-c9b9-11e9-bc97-0e49f1f8e77c');
    fist.img.addEventListener(Globals.EVENT_WEAPON_READY, event = () => {
      this.stow(fist);
      this.equip(fist);
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
    return [smells[smell], colors[smell]];
  }
  
  
  async render() {
    this.bumDefault.onload = () => {
      this.maxWidth = this.bumDefault.width;
      this.maxHeight = this.bumDefault.height;
      this.height = this.bumDefault.height;
      this.width = this.bumDefault.width;

      this.sprite = new fabric.Image(this.bumDefault, {
        left: this.imgX,
        top: this.imgY,
        selectable:false,
        hoverCursor:'arrow'
      });
      this.sprite.metadata = {};
      this.sprite.metadata = this;
      this.canvas.add(this.sprite);
      console.log('loaded player sprite');
      this.bumDefault.dispatchEvent(new Event(Globals.EVENT_PLAYER_READY));
    };
    this.bumDefault.src = 'img/people/bum_default.png';
    
    this.bumLeft = new Image();
    this.bumLeft.src = 'img/people/bum_left.png';
    
    this.bumRight = new Image();
    this.bumRight.src = 'img/people/bum_right.png';
    
    this.bumUp = new Image();
    this.bumUp.src = 'img/people/bum_backwards.png';
    
    this.walkRightFrames = [];
    this.walkLeftFrames = [];
    this.walkUpFrames = [];
    this.walkDownFrames = [];
    this.talkFrames = [];
    this.punchLeftFrames = [];
    this.punchRightFrames = [];
    
    let dbInfo = await this.queryBackend('GET', Globals.API_DIR + 'animations/' + this.id);
    if (dbInfo) {
      for (let i=0; i < dbInfo.length; i++) {
        let img = new Image();
        img.src = Globals.ANIMATIONS_DIR + dbInfo[i].url;
        switch(dbInfo[i].type) {
          case 'walk_left':
            this.walkLeftFrames.push(img);
            break;
          case 'walk_right':
            this.walkRightFrames.push(img);
            break;
          case 'walk_up':
            this.walkUpFrames.push(img);
            break;
          case 'walk_down':
            this.walkDownFrames.push(img);
            break;
          case 'talk':
            this.talkFrames.push(img);
            break;
          case 'punch_left':
            this.punchLeftFrames.push(img);
            break;
          case 'punch_right':
            this.punchRightFrames.push(img);
            break;
        }
      }
    }
  }

  resample() {
    console.log("resample", this);
    this.scaleSpriteByYCoord(this.imgY + this.height);
    console.log(this.width);
    this.imgX = this.imgX + Math.abs(this.maxWidth - this.width);
    this.imgY = this.imgY + Math.abs(this.maxHeight - this.height);
    
    this.sprite.set('top', this.imgY);
    this.sprite.set('left', this.imgX);
    this.x = this.imgX + this.width/2;
    this.y = this.imgY + this.height;
    this.sprite.setCoords();
    console.log(this.x, this.y);
    
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
  
  moveToFront() {
    
  }
  
  adjustZPosition() {
    let myZ = this.canvas.getObjects().indexOf(this.sprite);
    for (let i=0; i < this.location.decor.length; i++) {
      if (Globals.isIntersecting(this.sprite, this.location.decor[i].sprite)) {
        let decorZ = this.canvas.getObjects().indexOf(this.location.decor[i].sprite);
        //console.log(this.location.decor[i].getY(), 'vs', this.getY());
        //console.log(decorZ, 'vs', myZ);
        if (this.location.decor[i].getY() <= this.getY()) {
          this.sprite.bringToFront();
          //this.sprite.moveTo(decorZ+1);
        } else if (this.location.decor[i].getY() > this.getY() && decorZ <= myZ) {
          this.sprite.moveTo(decorZ-1);
        }
        //console.log('after', this.canvas.getObjects().indexOf(this.sprite));
      }
    }
    for (let i=0; i < this.location.actors.length; i++) {
      if (Globals.isIntersecting(this.sprite, this.location.actors[i].sprite)) {
        let actorZ = this.canvas.getObjects().indexOf(this.location.actors[i].sprite);
        if (this.location.actors[i].getY() <= this.getY() && actorZ >= myZ) {
          this.sprite.moveTo(actorZ+1);
        } else if (this.location.actors[i].getY() > this.getY() && actorZ <= myZ) {
          this.sprite.moveTo(actorZ-1);
        }
      }
    }
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
  
  async runAttackAnimation(dir) {
    let frames;
    switch(dir) {
      case 'right':
        frames = this.punchRightFrames;
        break;
      case 'left':
        frames = this.punchLeftFrames;
        break;
    }
      
    this.animIndex = 1;
    clearInterval(this.animInterval);
    console.log('starting fight animation');
    this.animInterval = setInterval(() => {
      if (this.animIndex >= frames.length) {
        this.animIndex = 1;
        clearInterval(this.animInterval);
        this.bumDefault.dispatchEvent(new Event(Globals.EVENT_PATH_NODE_WALKED));
      }
      console.log('fighting frame', frames[self.animIndex]);
      this.sprite.setElement(frames[this.animIndex]);
      this.canvas.renderAll();
      this.animIndex++;
    }, 50);
  }

  
  cancelAnimations() {
    clearInterval(this.animInterval);
    this.currentPath = null;
    this.bumDefault.removeEventListener(Globals.EVENT_PATH_NODE_WALKED, this.walkCallback);
    this.runningWalkLeft = false;
    this.runningWalkRight = false;
    this.runningWalkUp = false;
    this.runningWalkDown = false;
    this.runningTalk = false;
    this.isMoving = false;
  }
  
  animateWalk(x, y) {
    this.scaleSpriteByYCoord(y);
    this.sprite.animate('left',
                        x - this.width/2,
                        {
                          duration:100,
                          onChange: this.canvas.renderAll.bind(this.canvas),
                          abort: () => {
                            if (!this.isMoving) {
                              console.log('cancel');
                              this.x = this.sprite.aCoords.bl.x + this.width/2;
                              this.y = this.sprite.aCoords.bl.y;
                            }
                            return !this.isMoving;
                          }
                        });
    this.sprite.animate('top',
                        y - this.height,
                        {
                          duration:100,
                          onChange: this.canvas.renderAll.bind(this.canvas),
                          abort: () => {
                            if (!this.isMoving) {
                              console.log('cancel');
                              this.x = this.sprite.aCoords.bl.x + this.width/2;
                              this.y = this.sprite.aCoords.bl.y;
                            }
                            return !this.isMoving;
                          },
                          onComplete: () => {
                            this.x = x;
                            this.y = y;
                            if (this.animationCount%4 === 0 && this.location.combatOn) {
                              this.remainingMoves--;
                              this.updateMovementPointsDisplay(this.remainingMoves);
                            }
                            this.bumDefault.dispatchEvent(new Event(Globals.EVENT_PATH_NODE_WALKED));
                          }
                        });

    this.adjustZPosition();
  }
  
  cycleAnimation() {
    this.animationCount++;
    //console.log(this.animationCount, this.currentPath.length);
    if (this.animationCount < this.currentPath.length) {
      this.animateWalk(this.currentPath[this.animationCount][0], this.currentPath[this.animationCount][1]);
    } else {
      console.log('entire path walked');
      this.bumDefault.dispatchEvent(new Event(Globals.EVENT_PATH_WALKED));
      this.cancelAnimations();
    }
  }
  
  async openContainer(data) {
    let decorReady = this.adjustZPosition.bind(this);
    data.img.removeEventListener(Globals.EVENT_DECOR_READY, decorReady);
    this.bumDefault.removeEventListener(Globals.EVENT_PATH_WALKED, this.walkActionCallback);
    this.walkActionCallback = null;
    let containerInfo = await this.queryBackend('PUT', Globals.API_DIR + 'container/' + data.id + '/open').catch((err) => {
      this.print(err.message);
    });
    if (containerInfo) {
      data.imgURL = containerInfo.img_open;
      console.log('set img to', data.imgURL);
      data.open = true;
      console.log('dimg', data.img);
      data.img.addEventListener(Globals.EVENT_DECOR_READY, decorReady);
      data.render();
    }
  }
  
  async closeContainer(data) {
    console.log('data', data);
    this.bumDefault.removeEventListener(Globals.EVENT_PATH_WALKED, this.walkActionCallback);
    this.walkActionCallback = null;
    let containerInfo = await this.queryBackend('PUT', Globals.API_DIR + 'container/' + data.id + '/close').catch((err) => {
      this.print(err.message);
    });
    if (containerInfo) {
      data.imgURL = containerInfo.img_closed;
      console.log('set img to', data.imgURL);
      data.open = false;
      data.render();
    }
  }
  
  async searchContainer(data) {
    let containerInfo = await this.parent.queryBackend('GET', Globals.API_DIR + 'container/' + data.id + '/contents').catch((err) => {
      this.print(err.message);
    });
    if (containerInfo) {
      console.log('cont', containerInfo);
    }
  }
  
  tryToOpen(data) {
    if (!this.location.combatOn) {
      this.walkActionCallback = this.openContainer.bind(this, data)
      this.bumDefault.addEventListener(Globals.EVENT_PATH_WALKED, this.walkActionCallback);
      this.walkToObject(data);
    }
  }
  
  tryToClose(data) {
    if (!this.location.combatOn) {
      this.walkActionCallback = this.closeContainer.bind(this, data)
      this.bumDefault.addEventListener(Globals.EVENT_PATH_WALKED, this.walkActionCallback);
      this.walkToObject(data);
    }
  }
  
  tryToSearch(data) {
    if (!this.location.combatOn) {
      this.walkActionCallback = async() => {
        if (!data.open) {
          let containerInfo = await this.queryBackend('PUT', Globals.API_DIR + 'container/' + data.id + '/open').catch((err) => {
            this.print(err.message);
          });
          if (containerInfo) {
            let decorReady = this.adjustZPosition.bind(this);
            data.imgURL = containerInfo.img_open;
            console.log('set img to', data.imgURL);
            data.open = true;
            console.log('dimg', data.img);
            data.img.addEventListener(Globals.EVENT_DECOR_READY, decorReady);
            data.render();
          }
        }
        this.searchContainer(data);
      };
      this.bumDefault.addEventListener(Globals.EVENT_PATH_WALKED, this.walkActionCallback);
      this.walkToObject(data);
    }
  }
  
  clickedGroundPathResults(path) {
    if (path && path.length) {
      if (this.location.combatOn) {
        this.location.canvas.remove(this.location.combat.moveLine);
        this.location.combat.moveLine = null;
        this.location.canvas.remove(this.location.combat.moveText);
        this.location.combat.moveText = null;
            
        if (this.isMoving || Math.ceil(path.length/4) > this.remainingMoves) {
          return;
        }
      }
      for (let i=0; i < path.length; i++) {
        path[i][0] *= Globals.GRID_SQUARE_WIDTH;
        path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
      }
      console.log('got path', path);
      this.walkRoute(path);
    } else {
      this.bumDefault.dispatchEvent(new Event(Globals.EVENT_PATH_WALKED));
    }
  }
  
  walkToObject(target) {
    if (!this.location.combatOn) {
      let start = {};
      start.x = this.getX();
      start.y = this.getY();
      let end = {};
      end.x = target.getX();
      end.y = target.getY();
      console.log('end', end.x, end.y);
      if (this.location.walkPath.isPointInPath(end.x, end.y)) {
        let obj = {};
        obj.command = 'walkToObject';
        obj.start = start;
        obj.end = end;
        this.location.findPath(obj);
        
      }
    }
  }
  
  runWalkAnimation(dir) {
    let frames;
    switch(dir) {
      case 'right':
        this.runningRightWalk = true;
        frames = this.walkRightFrames;
        break;
      case 'left':
        this.runningLeftWalk = true;
        frames = this.walkLeftFrames;
        break;
      case 'up':
        this.runningUpWalk = true;
        frames = this.walkUpFrames;
        break;
      case 'down':
        this.runningDownWalk = true;
        frames = this.walkDownFrames;
        break;
      case 'talk':
        this.runningTalk = true;
        frames = this.talkFrames;
        break;
    }
    this.animIndex = 0;
    clearInterval(this.animInterval);
    this.animInterval = setInterval(() => {
      if (this.animIndex >= frames.length) {
        this.animIndex = 0;
      }
      this.sprite.setElement(frames[this.animIndex]);
      this.animIndex++;
    }, 250);
    
    this.sprite.setElement(frames[this.animIndex]);
    this.animIndex++;
  }
  
  walkRoute(path) {
    this.isMoving = true;
    this.animationCount = 0;
    this.currentPath = path;
    this.walkCallback = this.cycleAnimation.bind(this)
    this.bumDefault.addEventListener(Globals.EVENT_PATH_NODE_WALKED, this.walkCallback);
    
    let x = path[path.length-1][0];
    let y = path[path.length-1][1];
    
    if (x < this.getX()) {
      this.runWalkAnimation('left');
    } else if (x > this.getX()) {
      this.runWalkAnimation('right');
    } else if (y < this.getY()) {
      this.runWalkAnimation('up');
    } else if (y > this.getY()) {
      this.runWalkAnimation('down');
    }
    this.animateWalk(path[this.animationCount][0], path[this.animationCount][1]);
  }

}