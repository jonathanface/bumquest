
class Player {
  
  constructor (area) {
    var self = this;
    this.id = 1;
    this.location = area;
    this.width;
    this.height;
    this.inventory_open = false;
    this.isBabbling = false;
    this.atBabblePoint = false;

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
    
    this.babblePoint = new Point(350, self.location.lowPoint - 20);
    this.cash_earned = 0;
    
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
      if (!is_ui_disabled) {
        var xPos = self.x + event.offsetX - (UI_MENU_WIDTH/2);
        var yPos = self.y + event.offsetY - (UI_MENU_HEIGHT/2);
        showMenu(this, xPos, yPos);
      }
    });
  }
  
  updateImage(imgObj, scale) {
    if (!scale) {
      scale = 1;
    }
    this.currentImg = imgObj;
    $('.pc').css('background-image', 'url(' + imgObj.src + ')');
  }

  examine(object) {
    var self = this;
    if (object == self) {
      pc.say('I\'m the handsomest bum in town.');
      return;
    }
    if (object.lookID == 0) {
      this.say('Nothing really remarkable about it.');
      return;
    }
    if (object.lookText) {
      this.updateImage(this.img_talk);
      this.say(object.lookText);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/look', function(data) {
        var description = data.description;
        if (object.is_closed == 1) {
          description += '<br>It\'s closed.';
        }
        object.lookText = description;
        self.updateImage(self.img_talk);
        self.say(description);
      });
    }
  }
  
  take (object) {
    var self = this;
    if (object == self) {
      pc.say('Take myself? Where?');
      return;
    }
    if (!object.takeID) {
      this.say('I can\'t.');
      return;
    }
  }
  
  smell (object) {
    var self = this;
    if (object == self) {
      pc.say("I guess I <i>could</i> use a shower, now that you mention it.");
      return;
    }
    if (!object.smellID) {
      pc.say('It smells about as good as you\'d expect.');
      return;
    }
    if (needsToMove(self, object)) {
      var nearestPoint = getNearestCoordinates(self.location.walkpathNodes, new Point(object.interaction_x, object.interaction_y));
      clearTimeout(speechTimer);
      self.say('Well... okay...', 2000);
      self.walkTo(nearestPoint, function() {
        self.smell(object)
      });
      return;
    }
    if (object.smellText) {
      this.updateImage(this.img_talk);
      this.say(object.smellText);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/smell', function(data) {
        var description = data.description;
        object.smellText = description;
        self.updateImage(self.img_talk);
        self.say(description);
      });
    }
  }
  
  taste (object) {
    var self = this;
    if (object == self) {
      pc.say("I taste like vomit and cheap wine. Thanks for making me do that.");
      return;
    }
    if (!object.tasteID) {
      pc.say('Yeah, no.');
      return;
    }
    if (needsToMove(self, object)) {
      var nearestPoint = getNearestCoordinates(self.location.walkpathNodes, new Point(object.interaction_x, object.interaction_y));
      clearTimeout(speechTimer);
      self.say('Well... okay...', 2000);
      self.walkTo(nearestPoint, function() {
        self.taste(object)
      });
      return;
    }
    if (object.tasteText) {
      this.updateImage(this.img_talk);
      this.say(object.tasteText);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/taste', function(data) {
        var description = data.description;
        object.tasteText = description;
        self.updateImage(self.img_talk);
        self.say(description);
      });
    }
  }
  
  touch(object) {
    var self = this;
    if (object == self) {
      self.say("I'm not that desperate yet.");
      return;
    }

    if (needsToMove(self, object)) {
      var nearestPoint = getNearestCoordinates(self.location.walkpathNodes, new Point(object.interaction_x, object.interaction_y));
      clearTimeout(speechTimer);
      self.say('Well... okay...', 2000);
      self.walkTo(nearestPoint, function() {
        self.touch(object);
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

    if (!object.touchID) {
      pc.say('I\'m not touching that.');
      return;
    }
    if (object.touchText) {
      this.updateImage(this.img_talk);
      this.say(object.touchText);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/taste', function(data) {
        var description = data.description;
        object.touchText = description;
        self.updateImage(self.img_talk);
        self.say(description);
      });
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
  
  say(text, timer, callback) {
    var self = this;
    if ($('.pcTalk').length) {
      this.shutup(function() {pc.say(text, timer, callback)});
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
      narrate('You decide to practice your <b>drunken babble</b> for awhile...&nbsp;<img class="standby" src="img/hourglass.gif" title="wait..." alt="wait...">');
      self.babble();
      return;
    }
    if (!object.speakID) {
      this.say('I doubt it will answer.');
      return;
    }
    if (object.speakText) {
      this.say(object.speakText);
    } else {
      $.getJSON(SERVICE_URL + 'item/' + object.id + '/speak', function(data) {
        object.speakText = data.description;
        self.say(data.description);
      });
    }
  }
  
  babble(step) {
    var self = this;
    if (!step) {
      step = 0;
    }
    if (!this.atBabblePoint) {
      self.walkTo(self.babblePoint, function() {
        self.atBabblePoint = true;
        self.babble(step);
      });
      return;
    }
    this.isBabbling = true;
    disableUI();
    if (step < PC_BABBLE_ATTEMPTS) {
      this.say(generateDrunkenBabble(), 7000, function() {
        step++;
        setTimeout(function() {
          self.babble(step)
        }, rand(8000, 10000));
      });
    } else {
      this.isBabbling = false;
      this.atBabblePoint = false;
      enableUI();
      endNarration();
      narrate('Your deranged ranting earns you <b>$' + this.cash_earned + '.</b>', 3000);
      self.cash_earned = 0;
    }
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
    this.updateImage(imgObj);
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
        $('.pc').css('z-index', self.y);
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
          $('.pc').css('z-index', self.y);
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

