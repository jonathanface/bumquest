

export default () => {
  self.importScripts(self.location.origin + '/js/third-party/pathfinding-browser.min.js');
  
  const canvas = new OffscreenCanvas(1024, 768);
  self.walkPath = canvas.getContext('2d');
  
  self.cancel = false;
  
  
  
  self.addEventListener('message', event => { // eslint-disable-line no-restricted-globals
    if (!event) return;
    
    switch(event.data.command) {
      case 'generateWalkPath':
        console.log('make walkpath');
        self.walkPath.beginPath();
        self.walkPath.moveTo(event.data.path[0].x, event.data.path[0].y);
        for (let i=1; i < event.data.path.length; i++) {
          self.walkPath.lineTo(event.data.path[i].x, event.data.path[i].y);
        }
        self.walkPath.closePath();
        self.walkPath.fill();
        self.walkPath.save();
        break;
      case 'cancelThread':
        self.cancel = true;
        break;
      default:
        if (!self.cancel) {
          let scaleW = Math.ceil(event.data.width/event.data.gridwidth*4);
          let scaleH = Math.ceil(event.data.height/event.data.gridheight);
          let grid = new PF.Grid(scaleW, scaleH);
          for (let i=0; i < scaleW; i++) {
            for (let s=0; s < scaleH; s++) {
              if (self.walkPath.isPointInPath(i*event.data.gridwidth, s*event.data.gridheight)) {
                //console.log('true', i, s);
                grid.setWalkableAt(i, s, true);
              } else {
                //console.log('false', i, s);
                grid.setWalkableAt(i, s, false);
              }
            }
          }
          let pathfinder = new PF.DijkstraFinder({
            allowDiagonal: true,
            dontCrossCorners:false
          });
          let obj = event.data;
          obj.path = pathfinder.findPath(Math.round(obj.start.x/obj.gridwidth), Math.round(obj.start.y/obj.gridheight),
                                         Math.round(obj.end.x/obj.gridwidth), Math.round(obj.end.y/obj.gridheight), grid);
          postMessage(obj);
        } else {
          self.cancel = false;
        }
    }
  });
}

