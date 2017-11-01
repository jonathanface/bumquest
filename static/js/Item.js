class Item {
  
  constructor (id, title, location, image_opened, image_closed, x, y, is_closed, has_inventory) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.description;
    this.speech;
    const OBJ_URL = 'img/objects/';
    this.OBJ_URL = OBJ_URL;
    if (is_closed == 0 || is_closed == 1) {
      this.image = OBJ_URL + image_closed;
    } else {
      this.image = OBJ_URL + image_opened;
    }
    this.x = x;
    this.y = y;
    var img = $('<img data-objid="' + this.id + '" src="' + this.image + '" class="object">');
    $(img).css('left', this.x);
    $(img).css('top', this.y);
    $('main').append(img);
    
    $(img).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
    });
  }
}