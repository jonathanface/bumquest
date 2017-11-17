
const TEMPLATE_URL = 'templates/';
const SERVICE_URL = 'service/';

const PC_BASE_HEIGHT = 300;
const SPEECH_TIMER = 8000;
const MENU_TIMER = 3000;

const EVENT_AREA_LOADED = 'areaLoaded';

var speechTimer, menuTimer;
var pc;
var movement, keypresses = {};

function loadArea(areaID) {
  $.getJSON(SERVICE_URL + 'area/' + areaID, function(data) {
    var area = new Area(data.aid, data.title, data.description, data.image, data.walk_path, data.walk_type, data.objects, data.walkpath_nodes);
    pc = new Player(area);
    assignKeyboard();
    movement = setInterval(trackMovement, 20);
    $(window).trigger(EVENT_AREA_LOADED);
  });
}

var expletives = ['Ow!', 'Fuck!', 'Shit!'];

function expletive() {
  return expletives[rand(0, expletives.length-1)];
}



function trackMovement() {
  for (var direction in keypresses) {
    if (!keypresses.hasOwnProperty(direction)) continue;
    var ctx = $('main > canvas')[0].getContext('2d');
    switch(parseInt(direction)) {
      case 37://left
        console.log(pc.x);
        if (ctx.isPointInPath(pc.x-5, pc.y + pc.height)) {
          pc.walk('left');
        } else {
          pc.say(expletive(), 500);
        }
        break;
      case 39://right
        if (ctx.isPointInPath(pc.x+5+pc.width, pc.y + pc.height)) {
          pc.walk('right');
        } else {
          pc.say(expletive(), 500);
        }
        break;
      case 38://up
        if (ctx.isPointInPath(pc.x+pc.width/2, Math.abs(pc.y + pc.height - 6))) {
          pc.walk('up');
        } else {
          $('.pc').stop();
          pc.say(expletive(), 500);
        }
        break;
      case 40://down
        if (ctx.isPointInPath(pc.x+pc.width/2, pc.y + pc.height + 6)) {
          pc.walk('down');
        } else {
          $('.pc').stop();
          pc.say(expletive(), 500);
        }
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
    console.log('key: ' + event.which);
    if (event.which == 38) {
      pc.halt('up');
    } else {
      pc.halt();
    }
  });
}

function disableKeyboard() {
  $(document).off('keydown');
  $(document).off('keyup');
}

$(document).ready(function() {
  $(window).on(EVENT_AREA_LOADED, function() {
    $('.controls').find('.icon:eq(0)').click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (pc.inventory_open) {
        pc.closeInventory();
      } else {
        pc.openInventory();
      }
    });
  });
  loadArea(1);
});






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
  if (isNaN(parseInt(objectID))) {
    return;
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
      //assignMenuTimer(template);
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