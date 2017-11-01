
const TEMPLATE_URL = 'templates/';
const SERVICE_URL = 'service/';
const PC_BASE_HEIGHT = 300;
const PC_BASE_WIDTH = 94;
const PC_WALK_WIDTH = 90;

const SPEECH_TIMER = 8000;
const MENU_TIMER = 3000;

var currentArea;
var speechTimer, menuTimer;


function loadArea(areaID) {
  $.getJSON(SERVICE_URL + 'area/' + areaID, function(data) {
    var pc = new Player();
    currentArea = new Area(data.aid, data.title, data.description, data.image, data.walk_path, data.walk_type, pc, data.objects);
  });
}

$(document).ready(function() {
  loadArea(1);
});


function drawSpeechBubble(text, x, y) {
  var div = $('<div class="speechContainer"></div>');
  $(div).append('<div class="speechBubble">' + text + '</div>');
  $(document.body).append(div);
  $(div).css('left', x).css('top', y - $(div).height());
  $(div).fadeTo('fast', 1);
  assignSpeechTimer(div);
}

function Point(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

function getPointDistance(point1, point2) {
  return Math.hypot(point2.x-point1.x, point2.y-point1.y);
}

function animateWalk(array, start) {
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
      //$('.pc').css('background-size', '94px 300px');
      $('.pc').css('width', PC_BASE_WIDTH * scale);
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

function walkTo(map, xPos, yPos) {
  removeAllSpeech();
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
  }
}

function assignSpeechTimer(bubble) {
  speechTimer = setTimeout(function() {
    removeSpeechBubble(bubble);
  }, SPEECH_TIMER);
}

function assignMenuTimer(menu) {
  menuTimer = setTimeout(function() {
    if ($(menu).find('.ui_icons:hover').length) {
      assignMenuTimer(menu);
    } else {
      removeUIMenu(menu);
    }
  }, MENU_TIMER);
}

function removeSpeechBubble(bubble) {
  clearTimeout(speechTimer);
  $('.pc').css('background-image', 'url(img/people/bum_default.png)');
  $(bubble).fadeOut('fast', function() {
    $(this).remove();
  });
}

function removeAllSpeech() {
  clearTimeout(speechTimer);
  $('.pc').css('background-image', 'url(img/people/bum_default.png)');
  $('.speechContainer').fadeOut('fast', function() {
    $(this).remove();
  });
}

function removeUIMenu(menu) {
  clearTimeout(menuTimer);
  $(menu).fadeOut('fast', function() {
    $(this).remove();
  });
}

function removeAllUIMenus() {
  clearTimeout(menuTimer);
  $('.ui_menu').fadeOut('fast', function() {
    $(this).remove();
  });
}

function lookAtObject(objectID) {
  var object = $.grep(currentArea.items, function(e){ return e.id == objectID; });
  removeAllSpeech();
  if (object[0].description) {
    $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
    drawSpeechBubble(object[0].description, $('.pc').offset().left-20, $('.pc').offset().top);
  } else {
    $.getJSON(SERVICE_URL + 'object/' + objectID + '/look', function(data) {
      var description = data.description;
      console.log(data);
      if (data.is_closed == 1) {
        description += '<br><br>It\'s closed.';
      }
      object[0].description = description;
      $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
      drawSpeechBubble(description, $('.pc').offset().left-20, $('.pc').offset().top);
    });
  }
}

function speakToObject(objectID) {
  var object = $.grep(currentArea.items, function(e){ return e.id == objectID; });
  removeAllSpeech();
  if (object[0].speech) {
    $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
    drawSpeechBubble(object[0].speech, $('.pc').offset().left-20, $('.pc').offset().top);
  } else {
    $.getJSON(SERVICE_URL + 'object/' + objectID + '/speak', function(data) {
      object[0].speech = data.description;
      $('.pc').css('background-image', 'url(img/animations/bum_talk.gif)');
      console.log('speak');
      drawSpeechBubble(data.description, $('.pc').offset().left-20, $('.pc').offset().top);
    });
  }
}

function interact(action, object) {
  if (isNaN(parseInt(object))) {
    return;
  }
  switch(action) {
    case 'look':
      lookAtObject(object);
      break;
    case 'speak':
      speakToObject(object);
      break;
  }
  removeAllUIMenus();
}

function showMenu(object, xPos, yPos) {
  removeAllUIMenus();
  removeAllSpeech();
  $.get(TEMPLATE_URL + 'interact_menu.html', function(template) {
    template = $(template);
    var left = xPos + 10;
    var top = yPos - $(template).height()/2;
    $(template).css('top', top );
    $(template).css('left', left);
    $('main').append(template);
    $(template).find('.ui_icons img').each(function(index, item) {
      $(item).click(function(event) {
        interact($(item).data('action'), $(object).data('objid'));
      });
    });
    $(template).fadeTo('fast', 1, function() {
      assignMenuTimer(template);
    });
  });
}

