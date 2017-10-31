class Item {
  
  constructor (id, title, coords, shape, location) {
    this.id = id;
    this.title = title;
    this.coords = coords;
    this.shape = shape;
    this.location = location;
    this.description;
    this.speech;
  }
  
  drawShape() {
    var area = $('<area data-objid="' + this.id + '" coords="' + this.coords + '" shape="' + this.shape + '">');
    $('body').find('map#area_' + this.location).append(area);
    $(area).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      showMenu(this, event.pageX - $('main').offset().left, event.pageY - $('main').offset().top);
    });
  }
}