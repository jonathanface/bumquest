const UI_MENU_WIDTH = 160;
const UI_MENU_HEIGHT = 108;

const TEMPLATE_URL = 'templates/';
const SERVICE_URL = 'service/';

const PC_BASE_HEIGHT = 300;
const SPEECH_TIMER = 8000;
const MENU_TIMER = 3000;
const PC_BABBLE_ATTEMPTS = 3;

const EVENT_AREA_LOADED = 'areaLoaded';

var speechTimer, menuTimer;
var pc;
var movement, keypresses = {};
var is_ui_disabled = false;

function loadArea(areaID) {
  $.getJSON(SERVICE_URL + 'area/' + areaID, function(data) {
    var area = new Area(data.aid, data.title, data.description, data.image, data.walk_path, data.walk_type, data.items, data.walkpath_nodes, data.pedestrian_min_y, data.pedestrian_max_y);
    $(area).on(EVENT_AREA_LOADED, function() {
      $('.controls').find('.icon:eq(0)').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (pc.inventory_open) {
          pc.closeInventory();
        } else {
          pc.openInventory();
        }
      });
      pc = new Player(area);
      assignKeyboard();
      movement = setInterval(trackMovement, 20);
      runPedestrians(area);
    });
    area.setup();
  });
}

var expletives = ['Ow!', 'Fuck!', 'Shit!'];

function expletive() {
  return expletives[rand(0, expletives.length-1)];
}

function narrate(text, timer) {
  var parent = $('<div class="narrationContainer"></div>');
  var child = $('<div class="narration"></div>');
  $(child).append(text);
  $(parent).append(child);
  $('main').append(parent);
  $(parent).fadeIn('fast');
  if (timer) {
    setTimeout(endNarration, timer);
  }
}

function endNarration() {
  $('.narrationContainer').fadeOut('fast');
}

function trackMovement() {
  for (var direction in keypresses) {
    if (!keypresses.hasOwnProperty(direction)) continue;
    var ctx = $('main > canvas')[0].getContext('2d');
    switch(parseInt(direction)) {
      case 37://left
        pc.walk('left');
        break;
      case 39://right
        pc.walk('right');
        break;
      case 38://up
        pc.walk('up');
        break;
      case 40://down
        pc.walk('down');
        break;
    }
  }
}

function assignKeyboard() {
  $(document).off('keydown').keydown(function(event) {
    event.preventDefault();
    keypresses[event.which] = true;
  });
  $(document).off('keyup').keyup(function(event) {
    event.preventDefault();
    delete keypresses[event.which];
    if (event.which == 38) {
      pc.img_default = pc.img_backwards;
    } else {
      pc.img_default = pc.img_forward;
    }
    pc.halt();
  });
}

function disableKeyboard() {
  $(document).off('keydown');
  $(document).off('keyup');
}

function disableUI() {
  is_ui_disabled = true;
  disableKeyboard();
}

function enableUI() {
  is_ui_disabled = false;
  assignKeyboard();
}

$(document).ready(function() {
  $.get(SERVICE_URL + 'setup', function() {
    loadArea(1);
  });
});

function pedestrianShutup(div, callback) {
  clearTimeout($(div).data('speechTimer'));
  if ($(div).data('bubble')) {
    $(div).data('bubble').fadeOut('fast', function() {
      $(this).remove();
      $(div).data('bubble', null);
      if (callback) {
        console.log('rem');
        callback();
      }
    });
  }
}

function positionPedestrianBubble(div) {
  if ($(div).data('bubble')) {
    $(div).data('bubble').css('left', $(div).offset().left-20).css('top', $(div).position().top - $(div).data('bubble').height() + 20);
  }
}

function pedestrianTalk(div, text) {
  var bubble = $('<div class="speechContainer"></div>');
  $(bubble).append('<div class="speechBubble">' + text + '</div>');
  $(div).data('bubble', bubble);
  $(document.body).append(bubble);
  positionPedestrianBubble(div);
  $(bubble).fadeTo('fast', 1);
}



function makePedestrian(area, y, direction) {
  var div = $('<div class="pedestrian"></div>');
  $(div).css('background-image', 'url(img/animations/pedestrian_left_1.gif)');
  if (direction) {
    $(div).css('background-image', 'url(img/animations/pedestrian_right_1.gif)');
  }
  $('main').append(div);
  var yRange = area.lowPoint - area.highPoint;
  var feetY = area.lowPoint - y;
  var percTraveled = (feetY/yRange).toFixed(2);
  var newH = $(div).height() - ($(div).height() * percTraveled);
  var heightPercDiff = newH / $(div).height();
  var newW = $(div).width() * heightPercDiff;
  $(div).css('height', newH);
  $(div).css('width', newW);
  var destination;
  $(div).css('left', 0 - $(div).width());
  destination = $('main').width();
  if (direction) {
    $(div).css('left', $('main').width() + $(div).width());
    destination = 0 - $(div).width();
  }
  $(div).css('top', y - newH);
  $(div).css('z-index', y);
  if (pc.isBabbling) {
    $.getJSON(SERVICE_URL + '/pedestrianReaction', function(data) {
      if (data.positive == true) {
        pc.cash_earned += parseFloat(data.money);
        pedestrianTalk(div, generatePedestrianSympathy());
      } else {
        pedestrianTalk(div, generatePedestrianJeer());
      }
    });
      
  }
  $(div).animate({
    left: destination
  },{
    step: function() {
      positionPedestrianBubble(div);
    },
    duration: rand(3000, 8000),
    complete: function() {
      pedestrianShutup(div, function() {$(div).remove();});
    }
  });
}

function runPedestrians(area) {
  setTimeout(function() {
    makePedestrian(area, rand(area.pedestrianTrackLow, area.pedestrianTrackHigh), rand(0,1));
    runPedestrians(area);
  }, rand(500, 20000));
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

function removeSpeechBubble(bubble, callback) {
  clearTimeout(speechTimer);
  $('.pc').css('background-image', 'url(img/people/bum_default.png)');
  $(bubble).fadeOut('fast', function() {
    $(this).remove();
    if (callback) {
      callback();
    }
  });
}

function removeAllSpeech() {
  
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

function interact(action, objectID) {
  removeAllSpeech();
  var item = $.grep(pc.location.items, function(e){ return e.id == objectID; })[0];
  if (objectID == 'pc') {
    item = pc;
  }
  switch(action) {
    case 'look':
      pc.examine(item);
      break;
    case 'speak':
      pc.speakTo(item);
      break;
    case 'touch':
      pc.touch(item);
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

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucwords(str) {
  str = str.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
  	function(s){
  	  return s.toUpperCase();
	});
}

function generatePedestrianJeer() {
  var text = '';
  var random = rand(0, 4);
  switch(random) {
    case 0:
      text = 'Get a fuckin job.';
      break;
    case 1:
      text = 'You sicken me.';
      break;
    case 2:
      text = 'Beat it, rummy.';
      break;
    case 3:
      text = 'Look at this crazy sack of shit.';
      break;
    case 4:
      text = 'Get out of my way.';
      break;
  }
  return text;
}

function generatePedestrianSympathy() {
  var text = '';
  var random = rand(0, 3);
  switch(random) {
    case 0:
      text = 'Oh you poor man.';
      break;
    case 1:
      text = 'Here, pal, take this.';
      break;
    case 2:
      text = 'Here. Get something to eat, okay?';
      break;
    case 3:
      text = 'That\'s terrible, I\'m sorry.';
      break;
  }
  return text;
}