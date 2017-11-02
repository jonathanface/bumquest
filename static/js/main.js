
const TEMPLATE_URL = 'templates/';
const SERVICE_URL = 'service/';
const PC_BASE_HEIGHT = 300;
const PC_BASE_WIDTH = 94;
const PC_WALK_WIDTH = 90;

const SPEECH_TIMER = 8000;
const MENU_TIMER = 3000;

var speechTimer, menuTimer;
var pc;

function loadArea(areaID) {
  $.getJSON(SERVICE_URL + 'area/' + areaID, function(data) {
    var area = new Area(data.aid, data.title, data.description, data.image, data.walk_path, data.walk_type, pc, data.objects, data.walkpath_nodes);
    pc = new Player(area);
  });
}

$(document).ready(function() {
  loadArea(1);
});


function drawSpeechBubble(text, x, y, timer, callback) {
  var div = $('<div class="speechContainer"></div>');
  $(div).append('<div class="speechBubble">' + text + '</div>');
  $(document.body).append(div);
  $(div).css('left', x).css('top', y - $(div).height());
  $(div).fadeTo('fast', 1);
  assignSpeechTimer(div, timer, callback);
}

function assignSpeechTimer(bubble, timer, callback) {
  if (!timer) {
    timer = SPEECH_TIMER;
  }
  speechTimer = setTimeout(function() {
    removeSpeechBubble(bubble, callback);
  }, timer);
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
      assignMenuTimer(template);
    });
  });
}

