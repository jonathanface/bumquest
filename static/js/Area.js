class Area {
  
  constructor (id, title, description, image, walkPath, walkType, player, objects, nodes) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    const AREA_URL = 'img/areas/';
    this.AREA_URL = AREA_URL;
    this.walkPath = walkPath;
    this.walkType = walkType;
    this.loadBackground();
    this.items = [];
    for (var i=0; i < objects.length; i++) {
      var obj = new Item(objects[i].oid, objects[i].title,
                         this.id, objects[i].image_opened, objects[i].image_closed, objects[i].x,
                         objects[i].y, objects[i].is_closed, objects[i].has_inventory, objects[i].is_locked,
                         objects[i].contained_in, objects[i].interaction_x, objects[i].interaction_y);
      this.items.push(obj);
    }
    this.walkpathNodes = nodes;
    this.loadWalkpath();
    
  }
  
  loadObjects() {
    for (var i=0; i < this.objects.length; i++) {
      var area = $('<area coords="' + this.objects[i].coords + '" shape="' + this.objects[i].shape + '">');
      $('body').find('map#area_' + this.id).append(area);
      $(this.objects[i]).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }

  loadWalkpath() {
    var self = this;
    var area = $('<area class="clickwalk" coords="' + this.walkPath + '" shape="' + this.walkType + '">');
    $('body').find('map#area_' + this.id).append(area);
    $(area).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log('X: ' + (event.pageX - $('main').offset().left));
      console.log('Y: ' + (event.pageY - $('main').offset().top));
      pc.walkTo(new Point(event.pageX - $('main').offset().left, event.pageY - $('main').offset().top));
    });
  }
  
  loadBackground() {
    $('main').html('<div class="area"><img src="' + this.AREA_URL + this.image + '" usemap="area_' + this.id + '"></div>');
    $('body').append('<map id="area_' + this.id + '" name="area_' + this.id + '">');
  }
  
  
  
}