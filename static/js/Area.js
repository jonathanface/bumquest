class Area {
  
  constructor (id, title, description, image, walkPath, walkType, player, objects) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    const AREA_URL = 'img/areas/';
    this.AREA_URL = AREA_URL;
    this.walkPath = walkPath;
    this.walkType = walkType;
    this.player = player;
    this.loadBackground();
    this.items = [];
    for (var i=0; i < objects.length; i++) {
      var obj = new Item(objects[i].oid, objects[i].title,
                         this.id, objects[i].image_opened, objects[i].image_closed, objects[i].x,
                         objects[i].y, objects[i].is_closed, objects[i].has_inventory);
      this.items.push(obj);
    }
    this.player.loadPlayer();
    this.loadWalkpath();
  }
  
  loadObjects() {
    for (var i=0; i < this.objects.length; i++) {
      var area = $('<area coords="' + this.objects[i].coords + '" shape="' + this.objects[i].shape + '">');
      $('body').find('map#area_' + this.id).append(area);
      addObjectClick
      $(this.objects[i]).click(function(event) {
        console.log('clicked');
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }

  loadWalkpath() {
    var area = $('<area class="clickwalk" coords="' + this.walkPath + '" shape="' + this.walkType + '">');
    $('body').find('map#area_' + this.id).append(area);
    $(area).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      walkTo(area, event.pageX, event.pageY);
    });
  }
  
  loadBackground() {
    $('main').html('<div class="area"><img src="' + this.AREA_URL + this.image + '" usemap="area_' + this.id + '"></div>');
    $('body').append('<map id="area_' + this.id + '" name="area_' + this.id + '">');
  }
  
  
  
}