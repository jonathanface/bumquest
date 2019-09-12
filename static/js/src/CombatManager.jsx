import {Globals} from './Globals.jsx'

export class CombatManager {
  
  
  constructor(player, area, initiated) {
    this.area = area;
    this.player = player;
    this.canvas = area.canvas;
    
    this.playerTurn = false;
    if (initiated == 'player') {
      this.playerTurn = true;
    }
    
    this.moveLine = null;
    this.moveText = null;
    
    this.addMouseActions();
    this.combatSequence = 0;
    
    this.enemies = [];
    this.allies = [];
    
    this.updateMovementPointsDisplay(this.player.remainingMoves);
    
    for (let i=0; i < this.area.actors.length; i++) {
      if (this.area.actors[i].team == 1) {
        this.allies.push(this.area.actors[i]);
      }
      if (this.area.actors[i].team == 3) {
        this.enemies.push(this.area.actors[i]);
      }
    }
    console.log(this.allies, this.enemies);
    this.order = this.determineCombatOrder();
    console.log(this.order);
    this.nextTurn();
  }
  
  handlePlayerAttack(enemy) {
    if (!this.player) {
      return;
    }
    if (!this.player.equipped) {
      return;
    }
    if (this.player.equipped.type != Globals.OBJECT_TYPE_WEAPON) {
      return;
    }
    console.log('mv', this.player.remainingMoves, this.player.equipped.speed);
    this.player.remainingMoves -= this.player.equipped.speed;
    this.updateMovementPointsDisplay(this.player.remainingMoves);
    /*
    let attackResult = await this.queryBackend('GET', Globals.API_DIR + 'attack/' + this.state.player.id + '/' + enemy.id);
    if (attackResult) {
    }*/
    //89% (attacker's weapon skill) - 5% (defender's Armor Class) = 84%
    let toHit = this.player.skills.shootin;
    if (this.player.equipped.melee) {
      toHit = this.player.skills.scrappin;
    }
    let hitChance = toHit - enemy.stats.ac + Math.ceil(this.player.stats.luck/2);
    let roll = Globals.randomInt(1, 100);
    if (roll <= hitChance) {
      let damArr = this.player.equipped.damage.split('d');
      let damage = 0;
      for (let i=0; i < damArr[0]; i++) {
        damage += Globals.randomInt(1, damArr[1]);
      }
      let crit = Globals.randomInt(1, 100);
      if (crit <= this.player.stats.critical) {
        this.area.parent.print('You critically hit ' + Globals.ucwords(enemy.name) + ' for ' + damage*Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
      } else {
        this.area.parent.print('You hit ' + Globals.ucwords(enemy.name) + ' for ' + damage + ' points of damage.');
      }
    } else {
      let critFail = Globals.randomInt(1, 100);
      if (critFail <= Globals.CRITICAL_FAILURE_CHANCE) {
        let saveRoll = Globals.randomInt(1, 100);
        if (saveRoll >= this.player.stats.luck) {
          this.area.parent.print('You critically missed and lost the rest of your turn.');
          this.player.remainingMoves = 0;
          this.updateMovementPointsDisplay(this.player.remainingMoves);
        } else {
          this.area.parent.print('You missed.');
        }
      } else {
        this.area.parent.print('You missed.');
      }
    }
  }
  
  handleNPCAttack(npc, target) {
    console.log('npc attacking!');
    console.log(npc, target);
    if (!npc.equipped) {
      return;
    }
    if (npc.equipped.type != Globals.OBJECT_TYPE_WEAPON) {
      return;
    }
    npc.remainingMoves -= npc.equipped.speed;
    //89% (attacker's weapon skill) - 5% (defender's Armor Class) = 84%
    let toHit = npc.skills.shootin;
    if (npc.equipped.melee) {
      toHit = npc.skills.scrappin;
    }
    let hitChance = toHit - target.stats.ac + Math.ceil(npc.stats.luck/2);
    let roll = Globals.randomInt(1, 100);
    if (roll <= hitChance) {
      let damArr = npc.equipped.damage.split('d');
      let damage = 0;
      for (let i=0; i < damArr[0]; i++) {
        damage += Globals.randomInt(1, damArr[1]);
      }
      let crit = Globals.randomInt(1, 100);
      if (crit <= npc.stats.critical) {
        this.area.parent.print(Globals.ucwords(npc.name) + ' critically hits ' + Globals.ucwords(target.name) + ' for ' + damage*Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
      } else {
        this.area.parent.print(Globals.ucwords(npc.name) + ' hits ' + Globals.ucwords(target.name) + ' for ' + damage + ' points of damage.');
      }
    } else {
      let critFail = Globals.randomInt(1, 100);
      if (critFail <= Globals.CRITICAL_FAILURE_CHANCE) {
        let saveRoll = Globals.randomInt(1, 100);
        if (saveRoll >= this.player.stats.luck) {
          this.area.parent.print(Globals.ucwords(npc.name) + ' critically missed and lost the rest of his turn.');
          npc.remainingMoves = 0;
        } else {
          this.area.parent.print(Globals.ucwords(npc.name) + ' missed.');
        }
      } else {
        this.area.parent.print(Globals.ucwords(npc.name) + ' missed.');
      }
    }
  }
  
  checkRemainingNPCMoves(npc) {
    console.log('npc mvs', npc.remainingMoves);
    if (npc.remainingMoves <= 0) {
      console.log('npc turn complete');
      clearInterval(this.npcTurnInterval);
      this.combatSequence++;
      if (this.allies.length) {
        this.nextTurn();
      }
    }
  }
  
  chooseTarget(npc) {
    let lastDist = null;
    let target = null;
    if (npc.team == 3) {
      for (let i=0; i < this.allies.length; i++) {
        let path = this.area.findPath({'x':npc.getX(), 'y':npc.getY()}, {'x':this.allies[i].getX(), 'y':this.allies[i].getY()});
        if (path) {
          path = path.splice(0, path.length-1);
        }
        if (!lastDist || path.length < lastDist) {
          target = this.allies[i];
          lastDist = path.length;
        }
      }
      return target;
    }
  }
  
  handleNPCEndTurn(npc) {
    console.log('ending turn for', npc);
    npc.remainingMoves = 0;
  }
  
  runNPCAttacks(npc) {
    console.log('running npc attacks', npc.remainingMoves);
    let turnsLeft = npc.remainingMoves;
    if (turnsLeft >= npc.equipped.speed) {
      for (let i=0; i < turnsLeft; i++) {
        this.handleNPCAttack(npc, npc.targetAcquired);
      }
    } else {
      npc.remainingMoves = 0;
    }
  }
  
  doNPCTurn(npc) {
    let self = this;
    self.npcTurnInterval = setInterval(function() {
      self.checkRemainingNPCMoves(npc);
    }, 100);
    if (!npc.targetAcquired) {
      npc.targetAcquired = this.chooseTarget(npc);
    }
    let enemyPos = {'x':npc.targetAcquired.getX(), 'y':npc.targetAcquired.getY()};
    let path = self.area.findPath({'x':npc.getX(), 'y':npc.getY()}, enemyPos);
    if (path) {
      path = path.splice(0, path.length-1);
    }
    if (Math.ceil(path.length/4) > npc.equipped.range) {
      if (path.length/4 > npc.stats.speed) {
        path = path.splice(0, npc.stats.speed*4);
      }
      for (let i=0; i < path.length; i++) {
        path[i][0] *= Globals.GRID_SQUARE_WIDTH;
        path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
      }
      
      if (npc.remainingMoves - Math.ceil(path.length/4) >= npc.equipped.speed) {
        npc.walkRoute(path, this.runNPCAttacks.bind(self, npc));
      } else {
        npc.walkRoute(path, this.handleNPCEndTurn.bind(self, npc));
      }
    } else {
      this.runNPCAttacks(npc);
    }
  }
  
  checkRemainingPlayerMoves() {
    console.log('player remaining moves', this.player.remainingMoves);
    if (this.player.remainingMoves <= 0) {
      this.canvas.remove(this.moveLine);
      this.canvas.remove(this.moveText);
      this.moveLine = null;
      this.moveText = null;
      this.playerTurn = false;
      console.log('player turn complete');
      clearInterval(this.playerTurnInterval);
      this.combatSequence++;
      console.log('remaining enemies', this.enemies);
      if (this.enemies.length) {
        this.nextTurn();
      }
    }
  }
  
  nextTurn(sequence) {
    this.player.remainingMoves = this.player.stats.speed;
    let self = this;
    if (this.combatSequence >= this.order.length && this.enemies.length) {
      this.combatSequence = 0;
    }
    if (this.order[this.combatSequence]) {
      this.order[this.combatSequence].remainingMoves = this.order[this.combatSequence].stats.speed;
      if (this.order[this.combatSequence].type != Globals.OBJECT_TYPE_PLAYER) {
        this.playerTurn = false;
        console.log('npc turn');
        this.doNPCTurn(this.order[this.combatSequence]);
      } else {
        console.log('player turn');
        this.updateMovementPointsDisplay(this.player.remainingMoves);
        this.playerTurn = true;
        self.playerTurnInterval = setInterval(function() {
          self.checkRemainingPlayerMoves();
        }, 100);
      }
    }
  }
  
  getNPCByID(id) {
    for (let i=0; i < this.enemies.length; i++) {
      if (this.enemies[i].id == id) {
        return this.enemies[i];
      }
    }
    return null;
  }
  
  determineCombatOrder() {
    let order = [];
    let playerAdded = false;
    let npcCombatants = [];
    if (this.initiated == 'player') {
      //order.push(this.player);
      playerAdded = true;
      npcCombatants = this.enemies;
    } else {
      //order.push(this.getNPCByID(this.initiated));
      for (let i=0; i < this.enemies.length; i++) {
        if (this.enemies[i].id != this.initiated) {
          npcCombatants.push(this.enemies[i]);
        }
      }
    }
    npcCombatants.sort((a, b) => (a.stats.speed > b.stats.speed) ? 1 : -1);
    for (let i=0; i < npcCombatants.length; i++) {
      if (npcCombatants[i].stats.speed > this.player.stats.speed) {
        order.push(npcCombatants[i]);
        if (i == this.enemies.length-1 && !playerAdded) {
          order.push(this.player);
        }
      } else {
        if (!playerAdded) {
          order.push(this.player);
          playerAdded = true;
        }
        order.push(npcCombatants[i]);
      }
    }
    return order;
  }
  
  endPlayerTurn() {
    this.player.remainingMoves = 0;
    console.log('end player turn');
  }
  
  updateMovementPointsDisplay(value) {
    document.querySelector('#movement_points').innerHTML = value;
  }

  addMouseActions() {
    let self = this;
    
    this.canvas.on('mouse:out', function(event) {
      this.remove(self.moveLine);
      this.remove(self.moveText);
      self.moveLine = null;
      self.moveText = null;
    });

    this.canvas.on('mouse:move', function(event) {
      let player = self.player;
      if (self.playerTurn) {
        if (player.targetAcquired) {
          if (self.moveLine) {
            this.remove(self.moveLine);
            self.moveLine = null;
          }
          if (self.moveText) {
            this.remove(self.moveText);
            self.moveText = null;
          }
          return;
        }
        let start = {};
        start.x = player.getX();
        start.y = player.getY();
        
        let end = {};
        end.x = Math.round(event.pointer.x);
        end.y = Math.round(event.pointer.y);
        if (!self.moveLine && !player.isMoving) {
          let coords = [start.x, start.y, start.x, start.y];
          self.moveLine = new fabric.Line(coords, {
            stroke: 'black',
            strokeWidth: 3,
            selectable:false
          });
          self.canvas.add(self.moveLine);
        }
        if (!self.moveText && !player.isMoving) {
          self.moveText = new fabric.Text('X', { left: 100, top: 100, fontFamily:'verdana,geneva,sans-serif', fontSize:18, fontWeight:'bold', fill:'green'});
          self.canvas.add(self.moveText);
        }
        
        if (self.moveLine) {
          self.moveLine.set({'x2':end.x, 'y2':end.y});
        }
        let textPos = Object.assign({}, end);
        textPos.x += 10;
        textPos.y -= 7;
        if (self.moveText && self.moveLine) {
          if (self.area.walkPath.isPointInPath(end.x, end.y)) {
            let path = self.area.findPath(start, end);
            if (path && path.length) {
              self.moveText.set({text:Math.ceil(path.length/4).toString(), left:textPos.x, top:textPos.y});
              if (path.length/4 <= player.remainingMoves) {
                self.moveLine.set({stroke:'green'});
                self.moveText.set({fill:'green'});
              } else {
                self.moveLine.set({stroke:'red'});
                self.moveText.set({fill:'red'});
              }
            } else {
              self.moveLine.set({stroke:'black'});
              self.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'black'});
            }
          } else {
            self.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'red'});
          }
        }
        this.renderAll();
      }
    });
  }
}