import worker from './PathfindWorker.jsx';
import WebWorker from './WebWorker.jsx';

export class Globals {
  static ROOT_ELEMENT = document.getElementById('root');
  static AREAS_DIR = '/img/areas/';
  static TEMPLATE_DIR = '/templates/';
  static API_DIR = '/api/';
  static ANIMATIONS_DIR = '/img/animations/';
  
  static GRID_SQUARE_WIDTH = 25;
  static GRID_SQUARE_HEIGHT = 25;
  
  static EVENT_PLAYER_READY = 'playerReady';
  static EVENT_AREA_READY = 'areaReady';
  static EVENT_NPC_READY = 'npcReady';
  static EVENT_WEAPON_READY = 'weaponReady';
  static EVENT_DECOR_READY = 'decorReady';
  static EVENT_PATH_WALKED = 'pathWalked';
  static EVENT_PATH_NODE_WALKED = 'pathNodeWalked';
  
  static OBJECT_TYPE_PLAYER = 1;
  static OBJECT_TYPE_NPC = 2;
  static OBJECT_TYPE_WEAPON = 3;
  static OBJECT_TYPE_DECOR = 4;
  
  static CRITICAL_FAILURE_CHANCE = 10;
  static CRITICAL_DAMAGE_MODIFIER = 10;
  
  apiKey = null;
  isShowingSheet = false;
  static workerRequestID = 0;
  static resolves = {};
  static rejects = {};
  PathWorker = {};
  
  static SetupPathWorker(walkPoints) {
    this.PathWorker = new WebWorker(worker);
    this.PathWorker.postMessage({command:'generateWalkPath', path:walkPoints});
    this.PathWorker.addEventListener('message', event => {
      const {id, data, err} = event.data;     
      console.log('got ', event.data, 'back from worker');
      if (err) {
        const reject = this.rejects[event.data.id];
        if (reject) {
          reject(event);
        }
        delete this.rejects[event.data.id];
      }
      const resolve = this.resolves[event.data.id];
      if (resolve) {
        resolve(event.data);
        delete this.resolves[event.data.id];
      }
      
      
          /*
        case 'combatMouseMove':
          this.combat.combatMouseMoveResults(event.data);
          break;
        case 'playerCheckRange':
          if (event.data.path) {
            event.data.path = event.data.path.splice(0, event.data.path.length-1);
          }
          if (event.data.path && Math.ceil(event.data.path.length/4) > this.getPlayer().equipped.range) {
            this.print("You're out of range.");
            return;
          }
          if (!this.combatOn) {
            this.enterCombat('player');
          }
          console.log(event.data);
          this.combat.handlePlayerAttack(this.combat.getNPCByID(event.data.npc));
          break;
        case 'npcCheckRange':
          if (event.data.path) {
            event.data.path = event.data.path.splice(0, event.data.path.length-1);
          }
          let npc = this.combat.getNPCByID(event.data.npc);
          if (!this.combatOn) {
            this.enterCombat(npc);
          }
          
          if (event.data.path && Math.ceil(event.data.path.length/4) > npc.equipped.range) {
            this.print(Globals.ucwords(npc.name) + " is out of range.");
            this.combat.handleNPCMove();
            return;
          }

          console.log(event.data);
          this.combat.handleNPCAttack(npc, npc.targetAcquired);
          break;
      }*/
    });
  }
  
  static SendToWorker(obj) {
    this.workerRequestID++;
    obj.gridwidth = Globals.GRID_SQUARE_WIDTH;
    obj.gridheight = Globals.GRID_SQUARE_HEIGHT;
    obj.id = this.workerRequestID;
    console.log('sending to worker', obj);
    return new Promise ((resolve, reject) => {
      this.resolves[this.workerRequestID] = resolve;
      this.rejects[this.workerRequestID] = reject;
      this.PathWorker.postMessage(obj);
    }); 
  }
  
  static handleAccessDenied = function(callback) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', Globals.API_URL + 'token', true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload = function() {
        if (xhr.status == 200) {
          let json = JSON.parse(xhr.response);
          Globals.apiKey = json.token;
          if (callback) {
            callback();
          }
          resolve(true);
        } else {
          try {
            reject(false);
          } catch(e) {
            console.log(e);
          }
        }
      };
      xhr.send('email=' + Globals.apiEmail + '&pass=' + Globals.apiPass);
    });
  };
  
  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static upperFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static ucwords(str) {
    return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase()
    });
  }
  
  static distanceBetween(point1, point2, area) {
    let path = area.findPath(point1, point2);
    if (path) {
      path = path.splice(0, path.length-1);
    }
    return Math.ceil(path.length/4);
  }
  
  static isIntersecting(obj1, obj2) {
    return obj1.intersectsWithObject(obj2) ||
           obj1.isContainedWithinObject(obj2) ||
           obj2.isContainedWithinObject(obj1);
  }
}