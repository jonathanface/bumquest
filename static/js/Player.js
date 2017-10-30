class Player {
  
  constructor () {
    
  }
  
  loadPlayer() {
    $('main').append('<div class="pc"></div>');
  }
  
  walkTo(map, xPos, yPos) {
    removeAllUIMenus();
    var points = [new Point(65,728, 'A'), new Point(483,714, 'B'), new Point(478,477, 'C'), new Point(623,721, 'D'), new Point(938,718, 'E')];
    var currentPoint = new Point($('.pc').offset().left - $('main').offset().left, $('.pc').offset().top + $('.pc').height() - $('main').offset().top);
    var destination = new Point(xPos - $('main').offset().left, yPos - $('main').offset().top);
    var endPoint = getNearestCoordinates(points, destination);
    var startPoint = getNearestCoordinates(points, currentPoint);
   // console.log(startPoint);
    var g = new Graph();
   
    g.addVertex('A', {'B': getPointDistance(points[0], points[1])});
    g.addVertex('B', {'A' : getPointDistance(points[0], points[1]), 'C' : getPointDistance(points[1], points[2]), 'D' : getPointDistance(points[1], points[3])});
    g.addVertex('C', {'B' : getPointDistance(points[1], points[2]), 'D' : getPointDistance(points[2], points[3])});
    g.addVertex('D', {'C' : getPointDistance(points[2], points[3]), 'E' : getPointDistance(points[3], points[4]), 'B' : getPointDistance(points[3], points[1])});
    g.addVertex('E', {'D' : getPointDistance(points[3], points[4])});
    var route = g.shortestPath(startPoint.id, endPoint.id).reverse();
    var path = [];
    for (var i=0; i < route.length; i++) {
      path.push($.grep(points, function(e){ return e.id == route[i]; }));
    }
    if (path.length) {
      animateWalk(path, 0);
    }*/
  }
}