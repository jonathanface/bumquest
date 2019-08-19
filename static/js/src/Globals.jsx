
export class Globals {
  static ROOT_ELEMENT = document.getElementById('root');
  static AREAS_DIR = '/img/areas/';
  
  static GRID_SQUARE_WIDTH = 95;
  static GRID_SQUARE_HEIGHT = 25;
  
  static EVENT_PLAYER_READY = 'playerReady';
  static EVENT_AREA_READY = 'areaReady';
  static EVENT_NPC_READY = 'npcReady';
  
  static random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}