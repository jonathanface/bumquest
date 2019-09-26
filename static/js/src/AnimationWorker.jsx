

export default () => {
  self.importScripts(self.location.origin + '/js/third-party/pathfinding-browser.min.js');
  let sprites = [];
  self.addEventListener('message', event => { // eslint-disable-line no-restricted-globals
    if (!event) return;
    switch(event.data.command) {
      case 'findpath':
        let scaleW = Math.ceil(event.data.width/event.data.gridwidth*4);
        let scaleH = Math.ceil(event.data.height/event.data.gridheight);
        let grid = new PF.Grid(scaleW, scaleH);
        const canvas = new OffscreenCanvas(1024, 768);
        let walkPath = canvas.getContext('2d');
        walkPath.beginPath();
        walkPath.moveTo(event.data.path[0].x, event.data.path[0].y);
        for (let i=1; i < event.data.path.length; i++) {
          walkPath.lineTo(event.data.path[i].x, event.data.path[i].y);
        }
        walkPath.closePath();
        //this.walkPath.fillStyle = "#7fffd4";
        //this.walkPath.globalAlpha = 0;
        walkPath.fill();
        walkPath.save();
        for (let i=0; i < scaleW; i++) {
          for (let s=0; s < scaleH; s++) {
            /*
            let rect = new fabric.Rect({
              width:Globals.GRID_SQUARE_WIDTH,
              height:Globals.GRID_SQUARE_HEIGHT,
              left:i * Globals.GRID_SQUARE_WIDTH,
              top:s * Globals.GRID_SQUARE_HEIGHT,
              fill:'transparent',
              stroke:'green',
              strokeWidth:1,
              selectable:false,
              evented: false
            });*/
            if (walkPath.isPointInPath(i*event.data.gridwidth, s*event.data.gridheight)) {
            //  console.log('pass');
              grid.setWalkableAt(i, s, true);
              
            } else {
             // console.log('impass');
              grid.setWalkableAt(i, s, false);
              //rect.stroke = 'red';
            }
            //this.canvas.add(rect);
          }
        }
        let pathfinder = new PF.DijkstraFinder({
          allowDiagonal: true,
          dontCrossCorners:false
        });
        let obj = {};
        obj.command = 'path_results';
        obj.type = event.data.type;
        obj.grid = pathfinder.findPath(Math.round(event.data.start.x/event.data.gridwidth), Math.round(event.data.start.y/event.data.gridheight),
                                       Math.round(event.data.end.x/event.data.gridwidth), Math.round(event.data.end.y/event.data.gridheight), grid);
        postMessage(obj);
        break;
    }
    
  });
}

