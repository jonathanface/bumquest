import {Globals} from './Globals.jsx'

export class CombatManager {
  
  
  constructor(player, area) {
    this.area = area;
    this.player = player;
    this.enemies = area.enemies;
    this.canvas = area.canvas;
    
    this.playerTurn = false;
    this.moveLine = null;
    this.moveText = null;
    
    this.addMouseActions();
    this.combatSequence = 0;
    this.nextTurn();
  }
  
  checkRemainingNPCMoves(npc) {
    console.log('mvs', npc.remainingMoves);
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
    path = path.splice(0, path.length-1);
    if (path.length > 1 && npc.usingMelee) {
      if (path.length > npc.stats.speed) {
        path = path.splice(0, npc.stats.speed);
      }
      for (let i=0; i < path.length; i++) {
        path[i][0] *= Globals.GRID_SQUARE_WIDTH;
        path[i][1] *= Globals.GRID_SQUARE_HEIGHT;
      }
    }
    npc.walkRoute(path);
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
    console.log('ord', order[this.combatSequence]);
    if (this.combatSequence >= order.length && this.enemies.length) {
      this.combatSequence = 0;
    }
    if (order[this.combatSequence]) {
      order[this.combatSequence].remainingMoves = order[this.combatSequence].stats.speed;
      if (order[this.combatSequence].type != 'player') {
        this.playerTurn = false;
        console.log('npc turn');
        this.doNPCTurn(order[this.combatSequence]);
      } else {
        console.log('player turn');
        this.playerTurn = true;
        self.playerTurnInterval = setInterval(function() {
          self.checkRemainingPlayerMoves(order[this.combatSequence]);
        }, 100);
      }
    }
  }
  
  determineCombatOrder() {
    let order = [];
    this.enemies.sort((a, b) => (a.stats.speed > b.stats.speed) ? 1 : -1);
    let playerAdded = false;
    for (let i=0; i < this.enemies.length; i++) {
      if (this.enemies[i].stats.speed > this.player.stats.speed) {
        order.push(this.enemies[i]);
        if (i == this.enemies.length-1 && !playerAdded) {
          order.push(this.player);
        }
      } else {
        if (!playerAdded) {
          order.push(this.player);
          playerAdded = true;
        }
        order.push(this.enemies[i]);
      }
    }
    return order;
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
        let end = {};
        end.x = Math.round(event.pointer.x);
        end.y = Math.round(event.pointer.y);
        
        self.moveLine.set({'x2':end.x, 'y2':end.y});
        let textPos = Object.assign({}, end);
        textPos.x += 10;
        textPos.y -= 7;
        if (self.area.walkPath.isPointInPath(end.x, end.y)) {
          let path = self.area.findPath(start, end);
          if (path && path.length) {
            self.moveText.set({text:path.length.toString(), left:textPos.x, top:textPos.y});
            if (path.length <= player.remainingMoves) {
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
        this.renderAll();
      }
    });
  }
}