
export class Globals {
  static ROOT_ELEMENT = document.getElementById('root');
  static AREAS_DIR = '/img/areas/';
  static TEMPLATE_DIR = '/templates/';
  static API_DIR = '/api/';
  
  static GRID_SQUARE_WIDTH = 25;
  static GRID_SQUARE_HEIGHT = 25;
  
  static EVENT_PLAYER_READY = 'playerReady';
  static EVENT_AREA_READY = 'areaReady';
  static EVENT_NPC_READY = 'npcReady';
  static EVENT_WEAPON_READY = 'weaponReady';
  
  static OBJECT_TYPE_PLAYER = 1;
  static OBJECT_TYPE_NPC = 2;
  static OBJECT_TYPE_WEAPON = 3;
  
  apiKey = null;
  isShowingSheet = false;
  
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
  
  static random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}