
class Player {
  
  constructor (area) {
    var self = this;
    this.location = area;
    this.width;
    this.height;
    this.inventory_open = false;

    this.img_default = document.createElement('img');
    this.img_default.onload = function() {
      self.width = self.img_default.width;
      self.height = self.img_default.height;
      self.pathLocation = self.location.walkpathNodes[0];
      self.x = self.pathLocation.x - (self.width/2);
      self.y = self.pathLocation.y - self.height;
      $('main').append('<div class="pc" style="top:' + (self.pathLocation.y - self.height) + ';left:' + (self.pathLocation.x - (self.width/2)) + ';"></div>');
    }
    this.img_default.src = 'img/people/bum_default.png';
    this.initial_default_img = this.img_default;
    this.img_walkleft = document.createElement('img');
    this.img_walkleft.src = 'img/animations/bum_walk_left.gif';
    this.img_walkright = document.createElement('img');
    this.img_walkright.src = 'img/animations/bum_walk_right.gif';
    this.img_talk = document.createElement('img');
    this.img_talk.src = 'img/animations/bum_talk.gif';
    const MIN_INTERACT_DISTANCE = 100;
    this.MIN_INTERACT_DISTANCE = MIN_INTERACT_DISTANCE;
    
     }

  examine(object) {
    var self = this;
    if (object.description) {
      this.updateImage(this.img_talk);
      this.say(object.description);
    } else {
      $.getJSON(SERVICE_URL + 'object/' + object.id + '/look', function(data) {
        var description = data.description;
        if (data.is_closed == 1) {
          description += '<br>It\'s closed.';
        }
        object.description = description;
        self.updateImage(self.img_talk);
        self.say(description);
      });
    }
  }
  
  touch(object) {
    var self = this;
    var xPos = object.interaction_x, yPos = object.interaction_y;
    var destination = new Point(xPos, yPos);
    var path = this.location.walkpathNodes;
    var endPoint = getNearestCoordinates(path, destination);
    if (self.pathLocation.x != endPoint.x || self.pathLocation.y != endPoint.y) {
      self.say('Alright, hold on', 2000);
      self.walkTo(endPoint, function() {
        self.touch(object)
      });
      return;
    }
    if (object.is_locked) {
      this.say('It won\'t open.', 2000);
      return;
    }
    if (object.is_closed) {
      object.openIfClosed();
      self.say('Fine, it\'s open now.', 2000);
      return; 
    }
    if (object.has_inventory) {
      object.openInventory();
    }
  }
  
  openInventory() {
    var self = this;
    self.inventory_open = true;
    $.get(TEMPLATE_URL + 'inventory.html', function(template) {
      template = $(template);
      $(template).find('header > i').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        self.closeInventory();
      });
      $('main').append(template);
    });
  }
  
  closeInventory() {
    $('#player_inventory').remove();
    this.inventory_open = false;
  }

  assignSpeechTimer(timer, callback) {
    if (!timer) {
      timer = SPEECH_TIMER;
    }
    var self = this;
    speechTimer = setTimeout(function() {
      self.shutup(callback);
    }, timer);
  }
  
  shutup(callback) {
    clearTimeout(speechTimer);
    this.img_default = this.initial_default_img;
    this.updateImage(this.img_default);
    $('.speechContainer').fadeOut('fast', function() {
      $(this).remove();
      if (callback) {
        callback();
      }
    });
  }
  
  positionSpeechBubble(div) {
    $(div).css('left', $('.pc').offset().left-20).css('top', $('.pc').position().top - $(div).height() + 20);
  }
  
  say(text, timer, callback) {
    var self = this;
    if ($('.speechContainer').length) {
      this.shutup(function() {self.say(text, timer, callback)});
      return;
    }
    var div = $('<div class="speechContainer"></div>');
    $(div).append('<div class="speechBubble">' + text + '</div>');
    $(document.body).append(div);
    self.positionSpeechBubble(div);
    $(div).fadeTo('fast', 1);
    this.updateImage(this.img_talk);
    this.img_default = this.img_talk;
    this.assignSpeechTimer(timer, callback);
  }

  speakTo(object) {
    var self = this;
    if (object.speak_description) {
      this.say(object.speak_description);
    } else {
      $.getJSON(SERVICE_URL + 'object/' + object.id + '/speak', function(data) {
        object.speak_description = data.description;
        self.say(data.description);
      });
    }
  }
  
  walkTo(destination, callback) {
    var self = this;
    removeAllUIMenus();
    var points = [];
    var g = new Graph();
    for (var i=0; i < this.location.walkpathNodes.length; i++) {
      points.push(new Point(this.location.walkpathNodes[i].x, this.location.walkpathNodes[i].y, (this.location.walkpathNodes[i].vid).toString()));
      var vertexes = this.location.walkpathNodes[i].connects_with.split(',');
      var vertex = {};
      for (var s=0; s < vertexes.length; s++) {
        var nextPoint = $.grep(this.location.walkpathNodes, function(e){ return (e.vid).toString() == (vertexes[s]).toString(); })[0];
        vertex[nextPoint.vid] = getPointDistance(points[i], nextPoint);
      }
      g.addVertex((this.location.walkpathNodes[i].vid).toString(), vertex);
    }
    var destination = new Point(destination.x, destination.y);
    var endPoint = getNearestCoordinates(points, destination);
    var startPoint = getNearestCoordinates(points, self.pathLocation);
    var route = g.shortestPath(startPoint.id, endPoint.id).reverse();
    var path = [];
    for (var i=0; i < route.length; i++) {
      path.push($.grep(points, function(e){ return e.id == route[i]; }));
    }
    if (path.length) {
      this.animateWalk(path, 0, callback);
    }
  }
  
  walk(direction) {
    var self = this;
    var scale = 1;
    switch(direction) {
      case 'left':
        self.updateImage(self.img_walkleft, scale);
        $('.pc').stop().animate({
          left: "-=5"
        }, 0, function() {
          self.x -= 5;
          //self.y = self.pathLocation.y - self.height;
        });
        break;
      case 'right':
        self.updateImage(self.img_walkright, scale);
        $('.pc').stop().animate({
          left: "+=5"
        }, 0, function() {
          self.x += 5;
          //self.y = self.pathLocation.y - self.height;
        });
        break;
    }
    
  }
  
  halt() {
    $('.pc').stop();
    this.updateImage(this.img_default);
  }
  
  updateImage(imgObj, scale) {
    if (!scale) {
      scale = 1;
    }
    this.width = imgObj.width * scale;
    this.height = imgObj.height * scale;
    $('.pc').css('background-image', 'url(' + imgObj.src + ')');
  }
  

  animateWalk(array, start, callback) {
    var self = this;
    var baseY = 720;
    var imgObj = this.img_walkright;
    if (array[array.length-1][0].x < self.x) {
      imgObj = this.img_walkleft;
    }
    var scale = 1;
    if (Math.abs(array[start][0].y - baseY) > 100) {
      var multiplier = Math.round(Math.abs(array[start][0].y - baseY) / 100);
      scale -= (0.10 * multiplier);
    }

    this.updateImage(imgObj, scale);
    var self = this;
    $('.pc').stop().animate({
      left: array[start][0].x - self.width/2,
      top: array[start][0].y - self.height*scale,
      height: self.height * scale,
      width: self.width * scale
    }, {
      step: function() {
        self.x = $('.pc').position().left + ($('.pc').width()/2);
        self.y = $('.pc').position().top - $('pc').height();
        $('.speechContainer').each(function(index, item) {
          self.positionSpeechBubble(item);
        });
      },
      duration: 1000,
      complete: function() {
        if (array[start] == array[array.length-1]) {
          self.updateImage(self.img_default, scale);
          self.x = $('.pc').position().left + ($('.pc').width()/2);
          self.y = $('.pc').position().top - $('pc').height();
          self.pathLocation = array[start][0];
          $('.speechContainer').each(function(index, item) {
            self.positionSpeechBubble(item);
          });
          if (callback) {
            callback();
          }
        } else {
          start++;
          self.animateWalk(array, start, callback);
        }
      }
    });
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

