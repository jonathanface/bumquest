class Area {
  
  constructor (id, title, description, image, walkPath, walkType, objects, nodes, pedLow, pedHigh) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageURL = image;
    const AREA_URL = 'img/areas/';
    this.AREA_URL = AREA_URL;
    this.walkPath = walkPath;
    this.walkType = walkType;
    this.loadBackground();
    this.lowPoint = 755;
    this.highPoint = 375;
    this.pedestrianTrackLow = pedLow;
    this.pedestrianTrackHigh = pedHigh;
    this.items = [];
    for (var i=0; i < objects.length; i++) {
      var obj = new Item(objects[i].oid, objects[i].title,
                         this.id, objects[i].image_opened, objects[i].image_closed, objects[i].x,
                         objects[i].y, objects[i].interaction_x, objects[i].interaction_y,
                         objects[i].is_closed, objects[i].has_inventory, objects[i].is_locked, objects[i].contained_in,
                         objects[i].look_id, objects[i].smell_id, objects[i].taste_id, objects[i].take_id, objects[i].touch_id,
                         objects[i].speak_id);
      this.items.push(obj);
    }
    this.walkpathNodes = nodes;
    
    
  }
  
  setup() {
    this.loadWalkpath();
    $(this).trigger(EVENT_AREA_LOADED);
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
      //pc.walkTo(new Point(event.pageX - $('main').offset().left, event.pageY - $('main').offset().top));
    });
  }
  
  loadBackground() {
    var self = this;
    var img = new Image();
    img.onload = function() {
      var canvas = $('main canvas')[0];
      var ctx = canvas.getContext('2d');
      canvas.width = $(canvas).width();
      canvas.height = $(canvas).height();
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var coords = self.walkPath.split(',');
      ctx.fillStyle = 'rgba(0,0,0,0)';
      //ctx.fillStyle = 'pink';
      var path = ctx.beginPath();
      ctx.moveTo(coords[0], coords[1]);
      for (var i=2; i < coords.length; i+=2) {
        ctx.lineTo(coords[i], coords[i+1]);
      }
      ctx.closePath();
      ctx.fill();
    };
    img.src = this.AREA_URL + this.imageURL;
  }
  
  
  
}