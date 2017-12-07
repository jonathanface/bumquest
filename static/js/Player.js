
class Player {
  
  constructor (area) {
    var self = this;
    this.id = 1;
    this.title = 'me';
    this.location = area;
    this.width;
    this.height;
    this.inventory_open = false;
    this.isBabbling = false;
    this.atBabblePoint = false;
    this.inventory = [];
    
    const OBJ_URL = 'img/objects/';
    this.OBJ_URL = OBJ_URL;
    
    const PC_URL = 'img/people/';
    this.PC_URL = PC_URL;

    this.img_default = document.createElement('img');
    this.img_default.onload = function() {
      self.width = self.img_default.width;
      self.height = self.img_default.height;
      self.pathLocation = self.location.walkpathNodes[0];
      self.x = 65;
      self.y = area.lowPoint - self.height - 5;
      self.initial_height = self.height;
      self.initial_width = self.width;
      var dims = adjustPlayerScale(pc, self.y + self.height);
      self.width = dims.w;
      self.height = dims.h;
      $('main').append('<div class="pc" data-objid="pc" style="top:' + self.y + ';left:' + self.x + ';"></div>');
      $('.pc').css('z-index', self.y + self.height);
      $('.pc').css('height', self.height);
      $('.pc').css('width', self.width);
      self.addClickAction();
    }
    
    this.babblePoint = new Point(350, self.location.lowPoint - 20);
    this.cash_earned = 0;
    
    this.img_default.src = this.PC_URL + 'bum_default.png';
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
      self.say('...if you insist.', 2000);
      self.walkTo(nearestPoint, function() {
        self.taste(object)
      }.bind(self));
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
  
  take(object) {
    var self = this;
    if (object == self) {
      self.say("Take me? Where?");
      return;
    }

    if (needsToMove(self, object)) {
      var nearestPoint = getNearestCoordinates(self.location.walkpathNodes, new Point(object.interaction_x, object.interaction_y));
      clearTimeout(speechTimer);
      self.say('Alright, hold on...', 2000);
      self.walkTo(nearestPoint, function() {
        self.take(object);
      }.bind(self));
      return;
    }
    
    $.getJSON(SERVICE_URL + 'item/' + object.id + '/properties', function(data) {
      if (data.is_container && data.is_open) {
        object.openInventory();
      } else if (data.is_container && !data.is_open) {
        self.say("You want me to bash my head against it or something? It's closed.");
      }
    });
    
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
      self.say('Alright, hold on...', 2000);
      self.walkTo(nearestPoint, function() {
        self.touch(object);
      }.bind(self));
      return;
    }
    $.getJSON(SERVICE_URL + 'item/' + object.id + '/properties', function(data) {
      if (data.is_container && !data.is_open) {
        if (object.is_locked) {
          self.say('It won\'t open.', 2000);
        } else {
          object.openIfClosed();
        }
        return;
      }
      if (data.is_container && data.is_open) {
        object.closeIfOpened();
        return;
      }
      if (!data.is_container) {
        if (!object.touchID) {
          self.say('I\'m not touching that.');
          return;
        } else {
          self.updateImage(self.img_talk);
          self.say(data.description);
        }
      }
    });
  }
  
  openInventory() {
    var self = this;
    self.inventory_open = true;
    $.getJSON(SERVICE_URL + 'player/' + self.id + '/inventory', function(inventory) {
      $.get(TEMPLATE_URL + 'inventory.html', function(template) {
        template = $(template);
        $('main').append(template);
        //var img = $('<img src="' + self.image_default + '" alt="' + self.title + '">'); 
        $(template).find('.player_equip figure').append(self.img_default);
        $(inventory).each(function(index, item) {
          var obj = new Item(item.oid, item.title, 'pc_inventory', item.image, item.properties,
                         item.x, item.y, item.interaction_x, item.interaction_y,
                         item.look_id, item.smell_id, item.taste_id,
                         item.take_id, item.touch_id, item.speak_id);
          self.inventory.push(obj);
          var div = $('<div class="item_container" data-objid="' + item.oid + '"><img src="' + self.OBJ_URL + item.image + '" alt="' + item.title + '" title="' + item.title + '"></div>');
          $($('#player_inventory td')[index]).html(div);
          $($('#player_inventory td')[index]).contextmenu(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).css('opacity', 1);
            generateItemContextMenu(this, item, event);
          });
          $($('#player_inventory td')[index]).hover(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if ($(this).data('contextopen') != true) {
              $(this).css('opacity', 0.8);
            }
          }, function(event) {
            $(this).css('opacity', 1);
          });
          var draggable = $($('#player_inventory td')[index]).children('div');
          makeInventoryItemDraggable(draggable);
        });
        $('#player_inventory .fg table').click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          removeAllContextMenus();
        });
        $('#player_inventory .fg .action_drop').droppable({
          drop: function(event, ui) {
            var item = getInventoryItemByID($(ui.draggable).attr('data-objid'));
            var service = 'item/' + $(ui.draggable).attr('data-objid') + '/droponground/' + self.location.id + '/' + self.x + '/' + (self.y + self.height);
              
            $.ajax({
              //item/{oid:[0-9]+}/droponground/{aid:[0-9]+}{x:[0-9]+}{y:[0-9]+}
              url: SERVICE_URL + service,
              type: 'PUT',
              success: function(result) {
                console.log(result)
                item.x = self.x;
                item.y = self.y + self.height;
                item.location = self.location.id;
                self.location.items.push(item);
                var copy = $(ui.draggable).clone();
                $(ui.draggable).remove();
              }
            });
          }
        });
        $(template).find('header > i').click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          self.closeInventory();
        });
        
      });
    });
  }

  closeInventory() {
    $('#player_inventory').remove();
    this.inventory_open = false;
  }
  
  say(text, timer, callback) {
    var self = this;
    if ($('.pcTalk').length) {
      clearTimeout(speechTimer);
      $('.pcTalk').stop();
      this.shutup(function() {pc.say(text, timer, callback)}.bind(self));
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
      }.bind(self));
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
      endNarration();
      narrate('Your deranged ranting earns you <b>$' + this.cash_earned + '.</b>', 3000);
      this.cash_earned = 0;
      setTimeout(function() {
        enableUI();
        self.say('Whoop de fuckin doo.', 1000);
      }, 1000);
      
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
          $('.pc').stop().animate({
            left: "-=5"
          }, {
            step: function() {
              $('.speechContainer').each(function(index, item) {
                self.positionSpeechBubble(item);
              });
            },
            duration: 0,
            complete: function() {
              self.x -= 5;
            }
          });
        } else {
          self.img_default = self.img_forward;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
      case 'right':
        if (ctx.isPointInPath(self.x + 5 + self.width/2, self.y + self.height)) {
          self.img_default = self.img_walkright;
          if (self.currentImg != self.img_walkright) {
            self.updateImage(self.img_walkright);
          }
          $('.pc').stop().animate({
            left: "+=5"
          }, {
            step: function() {
              $('.speechContainer').each(function(index, item) {
                self.positionSpeechBubble(item);
              });
            },
            duration: 0,
            complete: function() {
              self.x += 5;
            }
          });
        } else {
          self.img_default = self.img_forward;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
      case 'up':
        var newDimensions = adjustPlayerScale(self, self.y - 5 + self.height);
        if (ctx.isPointInPath(self.x, self.y + newDimensions.h - 6) && ctx.isPointInPath(self.x+newDimensions.w, self.y + newDimensions.h - 6)) {
          self.img_default = self.img_backwards;
          if (self.currentImg != self.img_walkup) {
            self.updateImage(self.img_walkup);
          }
          $('.pc').stop().animate({
            top: "-=5",
            height: newDimensions.h,
            width: newDimensions.w
          }, {
            step: function() {
              $('.pc').css('z-index', $('.pc').css('top') + $('.pc').height());
              $('.speechContainer').each(function(index, item) {
                self.positionSpeechBubble(item);
              });
            },
            duration: 0,
            complete: function() {
              self.height = newDimensions.h;
              self.width = newDimensions.w;
              self.y -= 5;
              $('.pc').css('z-index', self.y + self.height);
            }
          });
        } else {
          self.img_default = self.img_backwards;
          self.halt();
          self.say(expletive(), 500);
        }
        break;
      case 'down':
        var newDimensions = adjustPlayerScale(self, self.y + 5 + self.height);
        if (ctx.isPointInPath(self.x, self.y + newDimensions.h + 6) && ctx.isPointInPath(self.x+newDimensions.w, self.y + newDimensions.h + 6)) {
          self.img_default = self.img_forward;
          if (self.currentImg != self.img_walkdown) {
            self.updateImage(self.img_walkdown);
          }
          $('.pc').stop().animate({
            top: "+=5",
            height: newDimensions.h,
            width: newDimensions.w
          }, {
            step: function() {
              $('.pc').css('z-index', $('.pc').css('top') + $('.pc').height());
              $('.speechContainer').each(function(index, item) {
                self.positionSpeechBubble(item);
              });
            },
            duration: 0,
            complete: function() {
              self.height = newDimensions.h;
              self.width = newDimensions.w;
              self.y += 5;
              $('.pc').css('z-index', self.y + self.height);
            }
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
    } else if (callback) {
      callback();
    }
  }

  animateWalk(array, start, callback) {
    var self = this;
    var imgObj;
    if (array[array.length-1][0].x < self.x) {
      imgObj = this.img_walkleft;
    } else if (array[array.length-1][0].x > self.x) {
      imgObj = this.img_walkright;
    } else if (array[array.length-1][0].y < self.y) {
      imgObj = this.img_walkup;
    } else if (array[array.length-1][0].y >= self.y) {
      imgObj = this.img_walkdown;
    }
    this.updateImage(imgObj);
    var dims = adjustPlayerScale(self, array[start][0].y);
    $('.pc').stop().animate({
      left: array[start][0].x - dims.w/2,
      top: array[start][0].y - dims.h
    }, {
      step: function() {
        self.x = $('.pc').position().left;
        self.y = $('.pc').position().top + self.height;
        var stepDims = adjustPlayerScale(self, self.y);
        self.width = stepDims.w;
        self.height = stepDims.h;
        $('.pc').css('z-index', self.y);
        $('.pc').css('height', self.height);
        $('.pc').css('width', self.width);
        $('.speechContainer').each(function(index, item) {
          self.positionSpeechBubble(item);
        });
      },
      duration: 1000,
      complete: function() {
        if (array[start] == array[array.length-1]) {
          self.updateImage(self.img_default);
          self.x = $('.pc').position().left;
          self.y = $('.pc').position().top;
          self.width = $('.pc').width();
          self.height = $('.pc').height();
          $('.pc').css('z-index', self.y + self.height);
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
          self.x = $('.pc').position().left;
          self.y = $('.pc').position().top;
          $('.pc').css('z-index', self.y + self.height);
          self.animateWalk(array, start, callback);
        }
      }
    });
  }
}

function getInventoryItemByID(id) {
  return $.grep(pc.inventory, function(e){ return e.id == id; });
}

function makeInventoryItemDraggable(div) {
    $(div).draggable({
      containment: '#player_inventory .fg',
      helper: 'clone',
      appendTo: '#player_inventory .fg',
      revert: 'invalid',
      revertDuration: 100,
      start: function(event, ui) {
        $(this).hide();
      },
      stop: function(event, ui) {
        $(this).show();
      }
    });
  }

