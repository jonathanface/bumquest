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
      showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
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

}