class Item {
  
  constructor (id, title, location, image_opened, image_closed, x, y, is_closed, has_inventory, is_locked, contained_in) {
    var self = this;
    this.id = id;
    this.title = title;
    this.location = location;
    this.description;
    const OBJ_URL = 'img/objects/';
    this.OBJ_URL = OBJ_URL;
    this.is_closed = is_closed;
    this.has_inventory = has_inventory;
    this.is_locked = is_locked;
    this.contained_in = contained_in;
    this.height;
    this.width;
    if (is_closed == 0 || is_closed == 1) {
      this.image = OBJ_URL + image_closed;
    } else {
      this.image = OBJ_URL + image_opened;
    }
    this.x = x;
    this.y = y;
    var img = $('<img data-objid="' + this.id + '" class="object">');
    img[0].onload = function() {
      self.width = $(img).width();
      self.height = $(img).height();
    }
    $(img).attr('src', this.image);
    $(img).css('left', this.x);
    $(img).css('top', this.y);
    $('main').append(img);
    
    $(img).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
    });
  }
  
  examine() {
    console.log('ok');
  }
}