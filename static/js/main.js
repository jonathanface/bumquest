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
  console.log('aid: ' + areaID);
  $.getJSON(SERVICE_URL + 'area/' + areaID, function(data) {
    var area = new Area(data.aid, data.title, data.description, data.image, data.walk_bounds, data.items, data.walkpath_nodes, data.pedestrian_min_y, data.pedestrian_max_y);
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



function runPedestrians(area) {
  setTimeout(function() {
    new Pedestrian(area, pc);
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
    case 'take':
      pc.take(item);
      break;
    case 'smell':
      pc.smell(item);
      break;
    case 'taste':
      pc.taste(item);
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


