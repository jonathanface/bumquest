import {Globals} from './Globals.jsx'

export class Decor {
  
  constructor(data, canvas, parent) {
    this.type = Globals.OBJECT_TYPE_DECOR;
    this.id = data.id;
    this.name = data.name;
    this.description = data.descr;
    this.parent = parent;
    this.canvas = canvas;
    this.location = data.location;
    this.imgURL = data.img;

    this.x = data.x;
    this.y = data.y;
    this.height = 0;
    this.width = 0;
    this.maxHeight = 0;
    this.maxWidth = 0;
    this.img = new Image();
  }
  
  render() {
    let self = this;
    
    this.img.onload = function() {
      self.maxWidth = this.width;
      self.maxHeight = this.height;
      self.height = this.height;
      self.width = this.width;
      

      self.sprite = new fabric.Image(self.img, {
        left: self.x,
        top: self.y,
        selectable:false,
        hoverCursor:'arrow'
      });
      self.y += this.height;
      self.sprite.metadata = {};
      self.sprite.metadata = self;
      self.canvas.add(self.sprite);
      self.sprite.on('mouseover', function() {
        self.parent.print('You see: '  + Globals.ucwords(self.name) + '.');;
      });
      self.sprite.on('mouseout', function() {
        
      });
      self.sprite.on('mouseup', function() {
        
      });
      self.canvas.add(self.sprite);
      this.dispatchEvent(new Event(Globals.EVENT_DECOR_READY));
    };
    this.img.src = 'img/objects/' + this.imgURL;
  }
  getX() {
    return Math.round(this.x);
  }
  
  getY() {
    return Math.round(this.y);
  }
}