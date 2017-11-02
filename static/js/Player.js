class Player {
  
  constructor (area) {
    this.location = area;
    const MIN_INTERACT_DISTANCE = 100;
    this.MIN_INTERACT_DISTANCE = MIN_INTERACT_DISTANCE;
    $('main').append('<div class="pc"></div>');
  }

  examine(object) {
    if (object.description) {
      $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
      drawSpeechBubble(object.description, $('.pc').offset().left-20, $('.pc').offset().top);
    } else {
      $.getJSON(SERVICE_URL + 'object/' + object.id + '/look', function(data) {
        var description = data.description;
        if (data.is_closed == 1) {
          description += '<br><br>It\'s closed.';
        }
        object.description = description;
        $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
        drawSpeechBubble(description, $('.pc').offset().left-20, $('.pc').offset().top);
      });
    }
  }
  
  touch(object) {
    var self = this;
    var xPos = object.x, yPos = object.y;

    var currentPoint = new Point($('.pc').offset().left - $('main').offset().left, $('.pc').offset().top + $('.pc').height() - $('main').offset().top);
    var destination = new Point(xPos - $('main').offset().left, yPos - $('main').offset().top + object.height);

    var points = [];
    var path = this.location.walkpathNodes;

    var endPoint = getNearestCoordinates(path, destination);
    var startPoint = getNearestCoordinates(path, currentPoint);

    if (startPoint != endPoint) {
      drawSpeechBubble('Alright, hold on', $('.pc').offset().left, $('.pc').offset().top, 1000, function() {
        self.walkTo(self.location.walkpathNodes, xPos, yPos, function() {
          self.touch(object)
        });
      });
      return;
    }
    console.log(object);
    if (object.is_locked) {
      drawSpeechBubble('It\'s locked', $('.pc').offset().left, $('.pc').offset().top, 2000);
    }
  }
  
  speakTo(object) {
    if (object.description) {
      $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
      drawSpeechBubble(object.description, $('.pc').offset().left-20, $('.pc').offset().top);
    } else {
      $.getJSON(SERVICE_URL + 'object/' + object.id + '/speak', function(data) {
        object.description = data.description;
        $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
        drawSpeechBubble(data.description, $('.pc').offset().left-20, $('.pc').offset().top);
      });
    }
  }
  
  walkTo(path, xPos, yPos, callback) {
    removeAllSpeech();
    removeAllUIMenus();
    var points = [];
    var g = new Graph();
    for (var i=0; i < path.length; i++) {
      points.push(new Point(path[i].x, path[i].y, (path[i].vid).toString()));
      var vertexes = path[i].connects_with.split(',');
      var vertex = {};
      for (var s=0; s < vertexes.length; s++) {
        var nextPoint = $.grep(path, function(e){ return (e.vid).toString() == (vertexes[s]).toString(); })[0];
        vertex[nextPoint.vid] = getPointDistance(points[i], nextPoint);
      }
      g.addVertex((path[i].vid).toString(), vertex);
    }
    
    var currentPoint = new Point($('.pc').offset().left - $('main').offset().left, $('.pc').offset().top + $('.pc').height() - $('main').offset().top);
    var destination = new Point(xPos - $('main').offset().left, yPos - $('main').offset().top);
    var endPoint = getNearestCoordinates(points, destination);
    var startPoint = getNearestCoordinates(points, currentPoint);

    var route = g.shortestPath(startPoint.id, endPoint.id).reverse();
    var path = [];
    for (var i=0; i < route.length; i++) {
      path.push($.grep(points, function(e){ return e.id == route[i]; }));
    }
    if (path.length) {
      animateWalk(path, 0, callback);
    }
  }
}

function Point(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

function getPointDistance(point1, point2) {
  return Math.hypot(point2.x-point1.x, point2.y-point1.y);
}

function animateWalk(array, start, callback) {
  var baseY = 720;
  var animationImg = 'url(img/animations/bum_walk_right.gif)';
  if (array[array.length-1][0].x < ($('.pc').offset().left - $('main').offset().left)) {
    animationImg = 'url(img/animations/bum_walk_left.gif)';
  }
  var scale = 1;
  if (Math.abs(array[start][0].y - baseY) > 100) {
    var multiplier = Math.round(Math.abs(array[start][0].y - baseY) / 100);
    scale -= (0.20 * multiplier);
    
  }
  
  $('.pc').css('background-image', animationImg);
  //$('.pc').css('width', PC_WALK_WIDTH);
  $('.pc').stop().animate({
    left: array[start][0].x - PC_BASE_WIDTH/2,
    top: array[start][0].y - PC_BASE_HEIGHT*scale,
    height: PC_BASE_HEIGHT * scale,
    width: PC_BASE_WIDTH * scale
  }, 1000, function() {
    if (array[start] == array[array.length-1]) {
      $('.pc').css('background-image', 'url(img/people/bum_default.png)');
      $('.pc').css('width', PC_BASE_WIDTH * scale);
      if (callback) {
        callback();
      }
    } else {
      start++;
      animateWalk(array, start);
    }
  });
}

function getNearestCoordinates(array, point) {
  var firstDistance = getPointDistance(point, array[0]);
  var closest = array[0];
  for (var i=1; i < array.length; i++) {
    var dist = getPointDistance(point, array[i]);
    if (dist < firstDistance) {
      firstDistance = dist;
      closest = array[i];
    }
  }
  return closest;
}

