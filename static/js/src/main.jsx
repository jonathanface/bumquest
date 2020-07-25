
import {Globals} from './Globals.jsx';
import {Engine} from './Engine.jsx'
import {Player} from './Player.jsx'
import {Area} from './Area.jsx'
import {Decor} from './Decor.jsx'
import {NPC} from './NPC.jsx'

let engine = new Engine();

function callCharacterSheet() {
  engine.showCharacterSheet();
}
function triggerEndTurn() {
  engine.endCombatTurn();
}

window.onload = function() {
  //new Globals();
  
  let startAreaID = '29c94708-c44c-11e9-bc97-0e49f1f8e77c';
  let tempPlayerID = '43554018-c44b-11e9-bc97-0e49f1f8e77c';
  
  engine.player = new Player(tempPlayerID, engine.canvas);
  
  engine.player.bumDefault.addEventListener(Globals.EVENT_PLAYER_READY, event = async() => {
    let dbInfo = await engine.queryBackend('GET', Globals.API_DIR + 'area/' + startAreaID);
    if (dbInfo) {
      engine.currentArea = new Area(startAreaID, engine.canvas);
      engine.currentArea.actors.push(engine.player);
      engine.player.location = engine.currentArea;
      
      engine.currentArea.loaderImg.addEventListener(Globals.EVENT_AREA_READY, event = async() => {  
        engine.player.resample();
        engine.player.sprite.bringToFront();
        
        let decorInfo = await engine.queryBackend('GET', Globals.API_DIR + 'area/' + engine.currentArea.id + '/decor');
        if (decorInfo) {
          console.log('decor', decorInfo);
          for (let i=0; i < decorInfo.length; i++) {
            let decor = new Decor(decorInfo[i], engine.canvas);
            decor.location = engine.currentArea;
            decor.render();
            engine.currentArea.decor.push(decor);
          }
          let npcInfo = await engine.queryBackend('GET', Globals.API_DIR + 'area/' + engine.currentArea.id + '/npcs');
          if (npcInfo) {
            for (let i=0; i < npcInfo.length; i++) {
              let npc = new NPC(npcInfo[i].id, engine.canvas);
              npc.name = npcInfo[i].name;
              npc.description = npcInfo[i].descr;
              npc.team = npcInfo[i].team;
              npc.imgX = npcInfo[i].x;
              npc.imgY = npcInfo[i].y;
              npc.location = engine.currentArea;
              npc.npcDefault.addEventListener(Globals.EVENT_NPC_READY, function(event) {
                engine.currentArea.actors.push(npc);
                npc.resample();
                npc.sprite.bringToFront();
                //engine.currentArea.enterCombat();
              });
              npc.render();
            }
          }
          engine.player.sprite.bringToFront();
        }
      });
      engine.currentArea.renderBackground();
      
      document.querySelector('.upper-canvas').oncontextmenu = function(event) {
        event.preventDefault();
        let objectFound = false;
        let clickPoint = new fabric.Point(event.offsetX, event.offsetY);
        let clickedObjects = [];
        engine.canvas.forEachObject(function (obj) {
          if (obj.containsPoint(clickPoint)) {
            clickedObjects.push(obj);
          }
        });
        clickedObjects.sort((a, b) => (engine.canvas.getObjects().indexOf(a) < engine.canvas.getObjects().indexOf(b)) ? 1 : -1)
        engine.renderRightClickOptions(event, clickedObjects[0]);
      }
      engine.print('You enter <b>' + dbInfo.name.toLowerCase() + '</b>.');
      engine.print(dbInfo.description, true);
    }
  });
  engine.player.render();
}