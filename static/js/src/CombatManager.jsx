import {Globals} from './Globals.jsx'

export class CombatManager {
  
  
  constructor(area, initiated) {
    this.area = area;
    this.player = area.getPlayer();
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
    
    this.updateRemainingMoves(this.player.remainingMoves);
    
    for (let i=0; i < this.area.actors.length; i++) {
      switch (this.area.actors[i].team) {
        case 1:
          this.allies.push(this.area.actors[i]);
          break;
        case 3:
          this.enemies.push(this.area.actors[i]);
          break;
      }
    }
    console.log(this.allies, this.enemies);
    this.order = this.determineCombatOrder();
    console.log(this.order);
    this.nextTurn();
  }
  
  handlePlayerAttack(enemy) {
    console.log(this.player, enemy);
    if (!this.player) {
      return;
    }
    if (!this.player.equipped) {
      return;
    }
    if (this.player.equipped.type != Globals.OBJECT_TYPE_WEAPON) {
      return;
    }
    if (this.player.getX() <= enemy.getX()) {
      this.player.runAttackAnimation('right');
    } else {
      this.player.runAttackAnimation('left');
    }
    this.updateRemainingMoves(this.player.remainingMoves - this.player.equipped.speed);
    let toHit = this.player.characterSheet.skills.shootin;
    if (this.player.equipped.melee) {
      toHit = this.player.characterSheet.skills.scrappin;
    }
    let hitChance = toHit - enemy.characterSheet.stats.ac + Math.ceil(this.player.characterSheet.stats.luck/2);
    let roll = Globals.randomInt(1, 100);
    if (roll <= hitChance) {
      let damArr = this.player.equipped.damage.split('d');
      let damage = 0;
      for (let i=0; i < damArr[0]; i++) {
        damage += Globals.randomInt(1, damArr[1]);
      }
      let crit = Globals.randomInt(1, 100);
      if (crit <= this.player.characterSheet.stats.critical) {
        this.area.print('You critically hit ' + Globals.ucwords(enemy.name) + ' for ' + damage*Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
      } else {
        this.area.print('You hit ' + Globals.ucwords(enemy.name) + ' for ' + damage + ' points of damage.');
      }
    } else {
      let critFail = Globals.randomInt(1, 100);
      if (critFail <= Globals.CRITICAL_FAILURE_CHANCE) {
        let saveRoll = Globals.randomInt(1, 100);
        if (saveRoll >= this.player.characterSheet.stats.luck) {
          this.area.print('You critically missed and lost the rest of your turn.');
          this.updateRemainingMoves(0);
        } else {
          this.area.print('You missed.');
        }
      } else {
        this.area.print('You missed.');
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
    let toHit = npc.characterSheet.skills.shootin;
    if (npc.equipped.melee) {
      toHit = npc.characterSheet.skills.scrappin;
    }
    let hitChance = toHit - target.characterSheet.stats.ac + Math.ceil(npc.characterSheet.stats.luck/2);
    let roll = Globals.randomInt(1, 100);
    if (roll <= hitChance) {
      let damArr = npc.equipped.damage.split('d');
      let damage = 0;
      for (let i=0; i < damArr[0]; i++) {
        damage += Globals.randomInt(1, damArr[1]);
      }
      let crit = Globals.randomInt(1, 100);
      if (crit <= npc.characterSheet.stats.critical) {
        this.area.print(Globals.ucwords(npc.name) + ' critically hits ' + Globals.ucwords(target.name) + ' for ' + damage*Globals.CRITICAL_DAMAGE_MODIFIER + ' points of damage.');
      } else {
        this.area.print(Globals.ucwords(npc.name) + ' hits ' + Globals.ucwords(target.name) + ' for ' + damage + ' points of damage.');
      }
    } else {
      let critFail = Globals.randomInt(1, 100);
      if (critFail <= Globals.CRITICAL_FAILURE_CHANCE) {
        let saveRoll = Globals.randomInt(1, 100);
        if (saveRoll >= this.player.characterSheet.stats.luck) {
          this.area.print(Globals.ucwords(npc.name) + ' critically missed and lost the rest of his turn.');
          npc.remainingMoves = 0;
        } else {
          this.area.print(Globals.ucwords(npc.name) + ' missed.');
        }
      } else {
        this.area.print(Globals.ucwords(npc.name) + ' missed.');
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
  
  async chooseTarget(npc) {
    return new Promise(async (resolve, reject) => {
      let lastDist = null;
      let target = null;
      if (npc.team == 3) {
        for (let i=0; i < this.allies.length; i++) {
          try {
            let results = await Globals.SendToWorker({
              'end' : {
                'x':npc.getX(),
                'y':npc.getY()
              },
              'start':{
                'x':this.allies[i].getX(),
                'y':this.allies[i].getY()
              },
              'width':this.area.width,
              'height':this.area.height,
              'path': this.area.walkPoints
            });
            if (results.path) {
              results.path = results.path.splice(0, results.path.length-1);
            }
            if (!lastDist || results.path && results.path.length < lastDist) {
              target = this.allies[i];
              lastDist = results.path.length;
              resolve(target);
            }
          } catch (e) {
            console.log(e);
            reject(e);
          }
        }
      }
      reject();
    });
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
  
  async doNPCTurn(npc) {
    console.log('running npc turn', npc);
    this.npcTurnInterval = setInterval(() => {
      this.checkRemainingNPCMoves(npc);
    }, 100);
    if (!npc.targetAcquired) {
      npc.targetAcquired = await this.chooseTarget(npc);
    }
    
    let enemyPos = {'x':npc.targetAcquired.getX(), 'y':npc.targetAcquired.getY()};
    let obj = {};
    obj.command = 'npcCheckRange';
    obj.npc = npc.id;
    obj.start = {'x':npc.getX(), 'y':npc.getY()};
    obj.end = enemyPos;
    obj.width = this.area.width;
    obj.height = this.area.height;
    obj.path = this.area.walkPoints;
    try {
      let results = await Globals.SendToWorker(obj);
      console.log('pt', results.path);
      if (results.path) {
        results.path = results.path.splice(0, results.path.length-1);
      }
      if (results.path && Math.ceil(results.path.length/4) > npc.equipped.range) {
        if (results.path.length/4 > npc.characterSheet.stats.speed) {
          results.path = results.path.splice(0, npc.characterSheet.stats.speed*4);
        }
        if (npc.remainingMoves - Math.ceil(results.path.length/4) >= npc.equipped.speed) {
          npc.walkRoute(results.path, this.runNPCAttacks.bind(this, npc));
        } else {
          npc.walkRoute(results.path, this.handleNPCEndTurn.bind(this, npc));
        }
      } else {
        this.runNPCAttacks(npc);
      }
    } catch(e) {
      console.log(e);
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
    

    if (this.combatSequence >= this.order.length && this.enemies.length) {
      this.combatSequence = 0;
    }
    if (this.order[this.combatSequence]) {
      if (this.order[this.combatSequence].type != Globals.OBJECT_TYPE_PLAYER) {
        this.playerTurn = false;
        console.log('npc turn');
        this.order[this.combatSequence].remainingMoves = this.order[this.combatSequence].characterSheet.stats.speed;
        this.doNPCTurn(this.order[this.combatSequence]);
      } else {
        console.log('player turn');
        this.updateRemainingMoves(this.player.characterSheet.stats.speed);
        this.playerTurn = true;
        this.playerTurnInterval = setInterval(() => {
          this.checkRemainingPlayerMoves();
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
    npcCombatants.sort((a, b) => (a.characterSheet.stats.speed > b.characterSheet.stats.speed) ? 1 : -1);
    for (let i=0; i < npcCombatants.length; i++) {
      if (npcCombatants[i].characterSheet.stats.speed > this.player.characterSheet.stats.speed) {
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
  
  updateRemainingMoves(value) {
    this.player.remainingMoves = value;
    document.querySelector('#movement_points').innerHTML = value;
  }

  combatMouseMoveResults(obj) {
    if (obj.path && obj.path.length) {
      if (!this.moveLine && !this.player.isMoving) {
        let coords = [obj.start.x, obj.start.y, obj.start.x, obj.start.y];
        this.moveLine = new fabric.Line(coords, {
          stroke: 'black',
          strokeWidth: 3,
          selectable:false
        });
        this.canvas.add(this.moveLine);
      }
      if (!this.moveText && !this.player.isMoving) {
        this.moveText = new fabric.Text('X', { left: 100, top: 100, fontFamily:'verdana,geneva,sans-serif', fontSize:18, fontWeight:'bold', fill:'green'});
        this.canvas.add(this.moveText);
      }
      
      if (this.moveLine) {
        this.moveLine.set({'x2':obj.end.x, 'y2':obj.end.y});
      }
      let textPos = Object.assign({}, obj.end);
      //textPos.x += 10;
      //textPos.y -= 7;
      console.log('move text', Math.ceil(obj.path.length/4).toString(), 'remmoves', this.player.remainingMoves);
      this.moveText.set({text:Math.ceil(obj.path.length/4).toString(), left:textPos.x, top:textPos.y});
      if (obj.path.length/4 <= this.player.remainingMoves) {
        this.moveLine.set({stroke:'green'});
        this.moveText.set({fill:'green'});
      } else {
        this.moveLine.set({stroke:'red'});
        this.moveText.set({fill:'red'});
      }
    } else {
      this.moveLine.set({stroke:'black'});
      this.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'black'});
    }
  }

  addMouseActions() {

    this.canvas.on('mouse:out', (event) => {
      this.canvas.remove(this.moveLine);
      this.canvas.remove(this.moveText);
      this.moveLine = null;
      this.moveText = null;
      Globals.PathWorker.postMessage({command:'cancelThread'});
    });

    this.canvas.on('mouse:move', async (event) => {
      if (this.playerTurn) {
        //self.area.PathWorker.postMessage({command:'cancelThread'});
        if (this.player.targetAcquired) {
          if (this.moveLine) {
            this.canvas.remove(this.moveLine);
            this.moveLine = null;
          }
          if (this.moveText) {
            this.canvas.remove(this.moveText);
            this.moveText = null;
          }
          return;
        }
        let start = {};
        start.x = this.player.getX();
        start.y = this.player.getY();
        
        let end = {};
        end.x = Math.round(event.pointer.x);
        end.y = Math.round(event.pointer.y);
        if (!this.moveLine && !this.player.isMoving) {
          let coords = [start.x, start.y, start.x, start.y];
          this.moveLine = new fabric.Line(coords, {
            stroke: 'black',
            strokeWidth: 3,
            selectable:false
          });
          this.canvas.add(this.moveLine);
        }
        if (!this.moveText && !this.player.isMoving) {
          this.moveText = new fabric.Text('X', { left: 100, top: 100, fontFamily:'verdana,geneva,sans-serif', fontSize:18, fontWeight:'bold', fill:'green'});
          this.canvas.add(this.moveText);
        }
        
        if (this.moveLine) {
          this.moveLine.set({'x2':end.x, 'y2':end.y});
        }
        let textPos = Object.assign({}, end);
        textPos.x += 10;
        textPos.y -= 7;
        if (this.moveText && this.moveLine) {
          if (this.area.walkPath.isPointInPath(end.x, end.y)) {
            let obj = {};
            obj.command = 'combatMouseMove';
            obj.start = start;
            obj.end = end;
            obj.width = this.area.width;
            obj.height = this.area.height;
            obj.path = this.area.WalkPoints;
            try {
              let results = await Globals.SendToWorker(obj);
              console.log(results);
              this.combatMouseMoveResults(results);
            } catch (e) {
              console.log(e);
            }
          } else {
            this.moveText.set({text:'X', left:textPos.x, top:textPos.y, fill:'red'});
          }
        }
        this.canvas.renderAll();
      }
    });
  }
}