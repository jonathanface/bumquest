import {Globals} from './Globals.jsx'
import {Weapon} from './Weapon.jsx'

export class Player {
  
  constructor(id, canvas, parent) {
    this.type = Globals.OBJECT_TYPE_PLAYER;
    this.id = id;
    this.parent = parent;
    this.canvas = canvas;
    this.location = null;
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
    
    
    this.traits = {};
    this.traits.autism = true;
    
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
    this.isTargeting = false;
    this.targetAcquired = null;
    
    this.inventory = [];
    this.team = 1;
    
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
    return [smells[smell], colors[smell]];
  }
  
  
  async render() {
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
      self.sprite.metadata = {};
      self.sprite.metadata = self;
      self.sprite.on('mouseover', function() {
        self.parent.print('You see: ' + Globals.ucwords(self.name) + '.');
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
    
    this.walkRightFrames = [];
    this.walkLeftFrames = [];
    this.walkUpFrames = [];
    this.walkDownFrames = [];
    this.talkFrames = [];
    
    let dbInfo = await self.parent.queryBackend('GET', Globals.API_DIR + 'animations/' + this.id);
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
        }
      }
    }
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
    
    //this.y = y + this.height;
    //this.x = this.x + this.width/2;
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
    let self = this;
    this.animIndex = 0;
    this.animInterval = setInterval(function() {
      if (self.animIndex >= frames.length) {
        console.log('runanim int');
        self.animIndex = 0;
      }
      self.sprite.setElement(frames[self.animIndex]);
      self.animIndex++;
    }, 250);
    
    this.sprite.setElement(frames[this.animIndex]);
    this.animIndex++;
  }
  
  cancelAnimations() {
    console.log('clear animations');
    clearInterval(this.animInterval);
    this.currentPath = null;
    this.bumDefault.removeEventListener(Globals.EVENT_PATH_WALKED, this.walkCallback);
    this.runningWalkLeft = false;
    this.runningWalkRight = false;
    this.runningWalkUp = false;
    this.runningWalkDown = false;
    this.runningTalk = false;
    this.isMoving = false;
  }
  
  animateWalk(x, y) {
    console.log('check anim');
    let self = this;

    this.scaleSpriteByYCoord(y);
    
    this.sprite.animate('left',
                        x - this.width/2,
                        {
                          duration:100,
                          onChange: this.canvas.renderAll.bind(this.canvas),
                          abort: function() {
                            if (!self.isMoving) {
                              console.log('cancel');
                              self.x = self.sprite.aCoords.bl.x + self.width/2;
                              self.y = self.sprite.aCoords.bl.y;
                            }
                            return !self.isMoving;
                          }
                        });
    this.sprite.animate('top',
                        y - this.height,
                        {
                          duration:100,
                          onChange: this.canvas.renderAll.bind(this.canvas),
                          abort: function() {
                            if (!self.isMoving) {
                              console.log('cancel');
                              self.x = self.sprite.aCoords.bl.x + self.width/2;
                              self.y = self.sprite.aCoords.bl.y;
                            }
                            return !self.isMoving;
                          },
                          onComplete: function() {
                            self.x = x;
                            self.y = y;
                            if (this.animationCount%4 === 0 && self.parent.state.currentArea.combatOn) {
                              self.remainingMoves--;
                              self.updateMovementPointsDisplay(self.remainingMoves);
                            }
                            self.bumDefault.dispatchEvent(new Event(Globals.EVENT_PATH_WALKED));
                          }
                        });

    this.adjustZPosition();
    
    /*
    let self = this;
    if (this.animatingCount < path.length) {
      if (path[this.animatingCount][1] < this.getY() && !this.runningUpWalk) {
        console.log('up');
        this.runWalkAnimation('up');
      } else if (path[this.animatingCount][1] > this.getY() && !this.runningDownWalk) {
        console.log('down');
        this.runWalkAnimation('down');
      } else if (path[this.animatingCount][0] < this.getX() && !this.runningLeftWalk) {
        console.log('left');
        this.runWalkAnimation('left');
      } else if (path[this.animatingCount][0] > this.getX() && !this.runningRightWalk) {
        console.log('right');
        this.runWalkAnimation('right');
      }
      this.scaleSpriteByYCoord(path[this.animatingCount][1]);
      this.sprite.animate('left',
                          path[this.animatingCount][0] - this.width/2,
                          {
                            duration:100,
                            onChange: this.canvas.renderAll.bind(this.canvas),
                            abort: function() {
                              if (!self.isMoving) {
                                console.log('cancel');
                                self.x = self.sprite.aCoords.bl.x + self.width/2;
                                self.y = self.sprite.aCoords.bl.y;
                              }
                              return !self.isMoving;
                            }
                          });
      this.sprite.animate('top',
                          path[this.animatingCount][1] - this.height,
                          {
                            duration:100,
                            onChange: this.canvas.renderAll.bind(this.canvas),
                            abort: function() {
                              if (!self.isMoving) {
                                console.log('cancel');
                                self.x = self.sprite.aCoords.bl.x + self.width/2;
                                self.y = self.sprite.aCoords.bl.y;
                              }
                              return !self.isMoving;
                            },
                            onComplete: function() {
                              console.log('pth', path, self.animatingCount);
                              self.x = path[self.animatingCount][0];
                              self.y = path[self.animatingCount][1];
                              self.animatingCount++;
                              if (self.animatingCount%4 === 0 && self.parent.state.currentArea.combatOn) {
                                self.remainingMoves--;
                                self.updateMovementPointsDisplay(self.remainingMoves);
                              }
                              if (self.isMoving) {
                                self.animateWalk(path);
                              }
                            }
                          });
    } else {
      this.cancelAnimations();
      if (path[this.animatingCount-1][0] < this.getX()) {
        this.sprite.setElement(this.bumLeft);
      } else if (path[this.animatingCount-1][0] > this.getX()) {
        this.sprite.setElement(this.bumRight);
      } else if (path[this.animatingCount-1][1] < this.getY()) {
        this.sprite.setElement(this.bumUp);
      } else if (path[this.animatingCount-1][1] > this.getY()) {
        this.sprite.setElement(this.bumDefault);
      } else {
        this.sprite.setElement(this.bumDefault);
      }
      console.log('done player walk');
      this.x = path[path.length-1][0];
      this.y = path[path.length-1][1];

      this.sprite.animate('left',
                          path[path.length-1][0] - this.width/2,
                          {
                            duration:100,
                            abort: function() {
                              if (!self.isMoving) {
                                self.x = self.sprite.aCoords.bl.x + self.width/2;
                                self.y = self.sprite.aCoords.bl.y;
                              }
                              return !self.isMoving;
                            },
                            onChange: this.canvas.renderAll.bind(this.canvas) });
      this.sprite.animate('top',
                          path[path.length-1][1] - this.height,
                          {
                            duration:100,
                            abort:function() {
                              if (!self.isMoving) {
                                self.x = self.sprite.aCoords.bl.x + self.width/2;
                                self.y = self.sprite.aCoords.bl.y;
                              }
                              return !self.isMoving;
                            },
                            onChange: this.canvas.renderAll.bind(this.canvas)});
      this.scaleSpriteByYCoord(path[path.length-1][1]);
      //
      console.log('done', path[path.length-1][0] - this.width/2, path[path.length-1][1] - this.height);
      this.isMoving = false;
      if (this.parent.state.currentArea.combatOn) {
        this.remainingMoves--;
        if (this.remainingMoves < 0) {
          this.remainingMoves = 0;
        }
        this.updateMovementPointsDisplay(this.remainingMoves);
      }
    }
    this.adjustZPosition();*/
  }
  
  cycleAnimation() {
    console.log('path segment walked');
    this.animationCount++;
    //console.log(this.animationCount, this.currentPath.length);
    if (this.animationCount < this.currentPath.length) {
      this.animateWalk(this.currentPath[this.animationCount][0], this.currentPath[this.animationCount][1]);
    } else {
      console.log('entire path walked');
      this.cancelAnimations();
    }
  }
  
  walkRoute(path) {
    this.isMoving = true;
    this.animationCount = 0;
    this.currentPath = path;
    this.walkCallback = this.cycleAnimation.bind(this)
    this.bumDefault.addEventListener(Globals.EVENT_PATH_WALKED, this.walkCallback);
    
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
    
    //this.animatingCount = 0;
    
    //this.animateWalk(path);
  }

}