class Item {
  
  constructor (id, title, location, image_opened, image_closed, x, y, is_closed, has_inventory, is_locked, contained_in, interact_x, interact_y) {
    var self = this;
    this.id = id;
    this.title = title;
    this.location = location;
    this.description;
    this.speak_description;
    const OBJ_URL = 'img/objects/';
    this.OBJ_URL = OBJ_URL;
    this.is_closed = is_closed;
    this.has_inventory = has_inventory;
    this.is_locked = is_locked;
    this.contained_in = contained_in;
    this.height;
    this.width;
    this.image_opened = image_opened;
    this.image_closed = image_closed;
    this.inventory_open = false;

    if (this.is_closed == 1) {
      var imgURL = OBJ_URL + this.image_closed;
    } else {
      var imgURL = OBJ_URL + this.image_opened;
    }
    this.x = x;
    this.y = y;
    this.interaction_x = interact_x;
    this.interaction_y = interact_y;
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
      if (!isUIDisabled) {
        showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
      }
    });
  }

  openIfClosed() {
    if (this.is_closed && !this.is_locked) {
      this.is_closed = false;
      $(this.img).attr('src', this.OBJ_URL + this.image_opened);
    }
  }
  closeIfOpened() {
    if (!this.is_closed) {
      this.is_closed = true;
      $(this.img).attr('src', this.OBJ_URL + this.image_closed);
    }
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