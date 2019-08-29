import {Globals} from './Globals.jsx'

export class CombatManager {
  
  
  constructor(player, area, initiated) {
    this.area = area;
    this.player = player;
    this.enemies = area.enemies;
    this.canvas = area.canvas;
    
    this.playerTurn = false;
    this.moveLine = null;
    this.moveText = null;
    
    this.addMouseActions();
    this.combatSequence = 0;
    this.updateMovementPointsDisplay(this.player.remainingMoves);
    
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
        if (saveRoll >= this.state.player.luck) {
          this.area.parent.print('You critically missed and lost your next turn.');
        } else {
          this.area.parent.print('You missed.');
        }
      } else {
        this.area.parent.print('You missed.');
      }
    }
  }
  
  checkRemainingNPCMoves(npc) {
    console.log('npc mvs', npc.remainingMoves);
    if (npc.remainingMoves <= 0) {
      console.log('npc turn complete');
      clearInterval(this.npcTurnInterval);
      this.combatSequence++;
      if (this.enemies.length) {
        this.nextTurn();
      }
    }
  }
  
  doNPCTurn(npc) {
    let self = this;
    self.npcTurnInterval = setInterval(function() {
      self.checkRemainingNPCMoves(npc);
    }, 100);
    let playerPos = {'x':self.player.getX(), 'y':self.player.getY()};
    let path = self.area.findPath({'x':npc.getX(), 'y':npc.getY()}, playerPos);
    if (path) {
      path = path.splice(0, path.length-1);
    }
    console.log('dist to player', path.length);
    if (path.length > 1 && npc.usingMelee) {
      if (path.length/4 > npc.stats.speed) {
        path = path.splice(0, npc.stats.speed*4);
      }
      for (let i=0; i < path.length; i++) {
        path[i][0] *= Globals.GRID_SQUARE_WIDTH;
        path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
      }
      npc.walkRoute(path, npc.attack.bind(npc));
    } else {
      npc.remainingMoves = 0;
    }
  }
  
  checkRemainingPlayerMoves(player) {
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
      if (this.enemies.length) {
        this.nextTurn();
      }
    }
  }
  
  nextTurn(sequence) {
    let self = this;
    let order = this.determineCombatOrder();
    if (this.combatSequence >= order.length && this.enemies.length) {
      this.combatSequence = 0;
    }
    if (order[this.combatSequence]) {
      order[this.combatSequence].remainingMoves = order[this.combatSequence].stats.speed;
      if (order[this.combatSequence].type != Globals.OBJECT_TYPE_PLAYER) {
        this.playerTurn = false;
        console.log('npc turn');
        this.doNPCTurn(order[this.combatSequence]);
      } else {
        console.log('player turn');
        this.updateMovementPointsDisplay(this.player.remainingMoves);
        this.playerTurn = true;
        self.playerTurnInterval = setInterval(function() {
          self.checkRemainingPlayerMoves(order[this.combatSequence]);
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
              console.log('pathl', path.length/4)
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