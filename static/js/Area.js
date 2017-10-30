class Area {
  
  constructor (id, title, description, image, walkPath, walkType, player) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    const AREA_URL = 'img/areas/';
    this.AREA_URL = AREA_URL;
    this.walkPath = walkPath;
    this.walkType = walkType;
    this.loadBackground();
    this.loadWalkpath();
    this.player = player;
  }

  loadWalkpath() {
    var area = $('<area class="clickwalk" coords="' + this.walkPath + '" shape="' + this.walkType + '">');
    $('body').find('map#area_' + this.id).append(area);
    $(area).click(function(event) {
      console.log('clicked');
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