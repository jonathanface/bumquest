
const TEMPLATE_URL = 'templates/';
const SERVICE_URL = 'service/';

$(document).ready(function() {
  $('area').each(function(index, item) {
    $(item).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
    });
  });
});

function assignMenuTimer(menu) {
  setTimeout(function() {
    if ($(menu).find('.ui_icons:hover').length) {
      assignMenuTimer(menu);
    } else {
      removeUIMenu(menu);
    }
  }, 3000);
}

function removeUIMenu(menu) {
  $(menu).fadeOut('fast', function() {
    $(this).remove();
  });
}

function removeAllUIMenus() {
  $('.ui_menu').fadeOut('fast', function() {
    $(this).remove();
  });
}

function lookAtObject(objectID) {
  console.log('looking at...');
  $.getJSON(SERVICE_URL + 'object/' + objectID + '/look', function(data) {
    console.log(data);
  });
}

function interact(action, object) {
  console.log(isNaN(parseInt(object)));
  console.log(object.length);
  if (isNaN(parseInt(object))) {
    console.log('??');
    return;
  }
  switch(action) {
    case 'look':
      lookAtObject(object);
      break;
  }
}

function showMenu(object, xPos, yPos) {
  removeAllUIMenus();
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

