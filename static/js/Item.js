class Item {

  constructor (id, title, location, image, properties, x, y, interact_x, interact_y,
               lookID, smellID, tasteID, takeID, touchID, speakID) {
    var self = this;
    
    const OBJ_URL = 'img/objects/';
    this.OBJ_URL = OBJ_URL;
    
    this.id = id;
    this.title = title;
    this.location = location;
    this.height;
    this.width;
    this.x = x;
    this.y = y;
    this.image = image;
    this.properties = properties;
    this.image_opened = properties.image_opened;
    this.image_closed = properties.image_closed;
    this.takeable = properties.takeable;
    this.interaction_x = interact_x;
    this.interaction_y = interact_y;

    this.inventory_open = false;
    
    this.lookID = lookID;
    this.smellID = smellID;
    this.tasteID = tasteID;
    this.takeID = takeID;
    this.touchID = touchID;
    this.speakID = speakID;
    
    this.lookText;
    this.smellText;
    this.tasteText;
    this.takeText;
    this.touchText;
    this.speakText;

    if (this.properties.is_container) {
      if (this.properties.is_open == 0) {
        var imgURL = OBJ_URL + this.image_closed;
      } else {
        var imgURL = OBJ_URL + this.image_opened;
      }
    } else {
      var imgURL = OBJ_URL + this.image;
    }

    this.img = $('<img data-objid="' + this.id + '" class="object">');
    this.img[0].onload = function() {
      self.width = $(self.img).width();
      self.height = $(self.img).height();
    }
    $(this.img).attr('src', imgURL);
    $(this.img).css('left', this.x);
    $(this.img).css('top', this.y);
    $('main').append(this.img);

    $(this.img).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!is_ui_disabled) {
        showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
      }
    });
  }

  openIfClosed() {
    var self = this;
    $.getJSON(SERVICE_URL + 'item/' + self.id + '/properties', function(data) {
      if (!data.is_open && !data.is_locked) {
        $(self.img).attr('src', self.OBJ_URL + self.image_opened);
        $.ajax({
          url: SERVICE_URL + 'item/' + self.id + '/open',
          type: 'PUT'
        });
      }
    });
  }
  closeIfOpened() {
    console.log('close');
    console.log(this.id);
    var self = this;
    $.getJSON(SERVICE_URL + 'item/' + self.id + '/properties', function(data) {
      if (data.is_open) {
        $(self.img).attr('src', self.OBJ_URL + self.image_closed);
        $.ajax({
          url: SERVICE_URL + 'item/' + self.id + '/close',
          type: 'PUT'
        });
      }
    });
  }
  openInventory() {
    var self = this;
    this.inventory_open = true;
    $.getJSON(SERVICE_URL + 'player/' + pc.id + '/inventory', function(inventory) {
      $.get(TEMPLATE_URL + 'item_inventory.html', function(template) {
        template = $(template);
        var img = $('<img src="' + self.OBJ_URL + self.image_opened + '">');
        $(template).find('.objContents > figure').append(img);
        $(template).find('.objContents > figure').append('<figcaption>' + ucwords(self.title) + '</figcaption>');
        $(template).find('header > i').click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          self.closeInventory();
        });
        $('main').append(template);
        $(inventory).each(function(index, item) {
          var div = $('<div class="item_container" data-objid="' + item.oid + '"><img src="' + self.OBJ_URL + item.image_closed + '" alt="' + item.title + '" title="' + item.title + '"></div>');
          $($('.playerInventory').find('td')[index]).html(div);
        });
        $('.playerInventory td').each(function(index, item) {
          $(item).droppable({
            drop: function(event, ui) {
              var cloned = $(ui.draggable).clone();
              $(this).append(cloned);
              $(cloned).draggable({
                containment: '#object_inventory .fg > div',
                helper: 'clone',
                appendTo: '#object_inventory .fg > div',
                start: function(event, ui) {
                  $(this).remove();
                }
              });
              $.post(SERVICE_URL + 'item/' + cloned.attr('data-objid') + '/take/' + self.id, function(data) {
                console.log(data);
              });
            }
          });
          $(item).children('div').draggable({
            containment: '#object_inventory .fg > div',
            helper: 'clone',
            appendTo: '#object_inventory .fg > div',
            start: function(event, ui) {
              $(this).remove();
            }
          });
        });
        $.getJSON(SERVICE_URL + 'item/' + self.id + '/inventory', function(data) {
          $(data).each(function(index, item) {
            var div = $('<div class="item_container" data-objid="' + item.oid + '"><img src="' + self.OBJ_URL + item.image_closed + '" alt="' + item.title + '" title="' + item.title + '"></div>');
            $($('.objectItems').find('td')[index]).html(div);
            $(div).draggable({
              containment: '#object_inventory .fg > div',
              helper: 'clone',
              appendTo: '#object_inventory .fg > div',
              start: function(event, ui) {
                $(this).remove();
              }
            });
          });
          $('.objectItems').find('td').droppable({
            drop: function(event, ui) {
              var cloned = $(ui.draggable).clone();
              $(this).append(cloned);
              $(cloned).draggable({
                containment: '#object_inventory .fg > div',
                helper: 'clone',
                appendTo: '#object_inventory .fg > div',
                start: function(event, ui) {
                  $(this).remove();
                }
              });
              $.ajax({
                url: SERVICE_URL + 'item/' + cloned.attr('data-objid') + '/drop/' + self.id,
                type: 'PUT',
                success: function(result) {
                    // Do something with the result
                }
              });
            }
          });
        });
      });
    });
  }
  
  closeInventory() {
    $('#object_inventory').remove();
    this.inventory_open = false;
  }
}