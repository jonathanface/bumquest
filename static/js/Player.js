
class Player {
  
  constructor (area) {
    var self = this;
    this.id = 1;
    this.location = area;
    this.width;
    this.height;
    this.inventory_open = false;
    this.isBabbling = false;

    this.img_default = document.createElement('img');
    this.img_default.onload = function() {
      self.width = self.img_default.width;
      self.height = self.img_default.height;
      self.pathLocation = self.location.walkpathNodes[0];
      self.x = 65;
      self.y = area.lowPoint - self.height;
      self.initial_height = self.height;
      self.initial_width = self.width;
      $('main').append('<div class="pc" data-objid="pc" style="top:' + self.y + ';left:' + self.x + ';"></div>');
      $('.pc').css('z-index', self.y + self.height);
      self.addClickAction();
    }
    
    this.img_default.src = 'img/people/bum_default.png';
    this.img_forward = this.img_default;
    this.current_img = this.img_default;
    
    this.img_backwards = document.createElement('img');
    this.img_backwards.src = 'img/people/bum_backwards.png';
    this.img_walkleft = document.createElement('img');
    this.img_walkleft.src = 'img/animations/bum_walk_left.gif';
    this.img_walkright = document.createElement('img');
    this.img_walkright.src = 'img/animations/bum_walk_right.gif';
    this.img_walkup = document.createElement('img');
    this.img_walkup.src = 'img/animations/bum_walk_up.gif';
    this.img_walkdown = document.createElement('img');
    this.img_walkdown.src = 'img/animations/bum_walk_down.gif';
    this.img_talk = document.createElement('img');
    this.img_talk.src = 'img/animations/bum_talk.gif';
    const MIN_INTERACT_DISTANCE = 100;
    this.MIN_INTERACT_DISTANCE = MIN_INTERACT_DISTANCE;
    
  }
  
  addClickAction() {
    var self = this;
    $('.pc').click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      var xPos = self.x + event.offsetX - (UI_MENU_WIDTH/2);
      var yPos = self.y + event.offsetY - (UI_MENU_HEIGHT/2);
      showMenu(this, xPos, yPos);
    });
  }

  examine(object) {
    var self = this;
    if (object.description) {
      this.updateImage(this.img_talk);
      this.say(object.description);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/look', function(data) {
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
    if (object == self) {
      pc.say("I'm not that desperate yet.");
      return;
    }
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
    this.updateImage(this.img_default);
    $('.pcTalk').fadeOut('fast', function() {
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
    if ($('.pcTalk').length) {
      this.shutup(function() {self.say(text, timer, callback)});
      return;
    }
    var div = $('<div class="speechContainer pcTalk"></div>');
    $(div).append('<div class="speechBubble">' + text + '</div>');
    $(document.body).append(div);
    self.positionSpeechBubble(div);
    $(div).fadeTo('fast', 1);
    if (this.img_default == this.img_forward) {
      this.updateImage(this.img_talk);
    }
    this.assignSpeechTimer(timer, callback);
  }

  speakTo(object) {
    var self = this;
    if (object == self) {
      narrate("You decide to practice your <b>drunken babble</b> for awhile...");
      self.babble();
      return;
    }
    if (object.speak_description) {
      this.say(object.speak_description);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/speak', function(data) {
        object.speak_description = data.description;
        self.say(data.description);
      });
    }
  }
  
  babble(step) {
    if (!step) {
      step = 0;
    }
    var self = this;
    this.isBabbling = true;
    disableUI();
    if (step < PC_BABBLE_ATTEMPTS) {
      this.say(generateDrunkenBabble(), 5000, function() {
        step++;
        setTimeout(function() {
          self.babble(step)
        }, rand(3000, 6000));
      });
    } else {
      this.isBabbling = false;
      enableUI();
      endNarration();
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
      disableKeyboard();
      this.animateWalk(path, 0, callback);
    }
  }
  
  walk(direction) {
    var self = this;
    removeAllUIMenus();
    var ctx = $('main > canvas')[0].getContext('2d');
    switch(direction) {
      case 'left':
        if (ctx.isPointInPath(self.x-5 + self.width/2, self.y + self.height)) {
          self.img_default = self.img_walkleft;
          if (self.currentImg != self.img_walkleft) {
            self.updateImage(self.img_walkleft);
          }
          self.x -= 5;
          $('.pc').stop().animate({
            left: "-=5"
          }, 0, function() {
            
          });
        } else {
          self.img_default = self.img_forward;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
      case 'right':
        if (ctx.isPointInPath(self.x + 6 + self.width/2, self.y + self.height)) {
          self.img_default = self.img_walkright;
          if (self.currentImg != self.img_walkright) {
            self.updateImage(self.img_walkright);
          }
          self.x += 5;
          $('.pc').stop().animate({
            left: "+=5"
          }, 0, function() {
            
          });
        } else {
          self.img_default = self.img_forward;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
        case 'up':
        var yRange = self.location.lowPoint - self.location.highPoint;
        var distanceTraveled = Math.abs(Math.round(self.location.lowPoint - (self.y + self.height)));
        var percTraveled = (distanceTraveled/yRange).toFixed(2);
        var tempH = self.initial_height - (self.height * percTraveled);
        var heightPercDiff = tempH / self.initial_height;
        var tempW = self.initial_width * heightPercDiff;
        if (ctx.isPointInPath(self.x, self.y + tempH - 6) && ctx.isPointInPath(self.x+tempW, self.y + tempH - 6)) {
          self.img_default = self.img_backwards;
          if (self.currentImg != self.img_walkup) {
            self.updateImage(self.img_walkup);
          }
          
          self.height = tempH;
          self.width = tempW;
          self.y -= 5;
          $('.pc').css('z-index', self.y);
          $('.pc').stop().animate({
            top: "-=5",
            height: self.height,
            width: self.width
          }, 0, function() {

          });
        } else {
          self.img_default = self.img_backwards;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
      case 'down':
        var yRange = self.location.lowPoint - self.location.highPoint;
        var distanceTraveled = Math.abs(Math.round(self.location.lowPoint - (self.y + self.height)));
        var percTraveled = (distanceTraveled/yRange).toFixed(2);
        var tempH = self.initial_height - (self.height * percTraveled);
        var heightPercDiff = tempH / self.initial_height;
        var tempW = self.initial_width * heightPercDiff;
        if (ctx.isPointInPath(self.x, self.y + tempH + 6) && ctx.isPointInPath(self.x+tempW, self.y + tempH + 6)) {
          self.img_default = self.img_forward;
          if (self.currentImg != self.img_walkdown) {
            self.updateImage(self.img_walkdown);
          }
          self.height = tempH;
          self.width = tempW;
          self.y += 5;
          $('.pc').css('z-index', self.y);
          $('.pc').stop().animate({
            top: "+=5",
            height: self.height,
            width: self.width
          }, 0, function() {

          });
        } else {
          self.img_default = self.img_forward;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
    }
    
  }
  
  halt(direction) {
    $('.pc').stop();
    this.updateImage(this.img_default);
  }
  
  updateImage(imgObj, scale) {
    if (!scale) {
      scale = 1;
    }
    this.currentImg = imgObj;
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
        self.x = $('.pc').position().left;
        self.y = $('.pc').position().top;
        $('.speechContainer').each(function(index, item) {
          self.positionSpeechBubble(item);
        });
      },
      duration: 1000,
      complete: function() {
        if (array[start] == array[array.length-1]) {
          self.updateImage(self.img_default, scale);
          self.x = $('.pc').position().left;
          self.y = $('.pc').position().top;
          self.pathLocation = array[start][0];
          $('.speechContainer').each(function(index, item) {
            self.positionSpeechBubble(item);
          });
          assignKeyboard();
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

function generateDrunkenBabble() {
  var text = '';
  
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

