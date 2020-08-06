import {Globals} from './Globals.jsx'
import {Engine} from './Engine.jsx';

export class Decor extends Engine {
  
  constructor(data, canvas) {
    super();
    this.type = Globals.OBJECT_TYPE_DECOR;
    this.id = data.id;
    this.name = data.name;
    this.description = data.descr;
    this.canvas = canvas;
    this.location;
    this.imgURL = data.img;
    
    this.container = data.container;
    this.door = data.door;
    this.open = data.open;

    this.orgX = data.x;
    this.orgY = data.y;
    this.height = 0;
    this.width = 0;
    this.maxHeight = 0;
    this.maxWidth = 0;
    this.img = new Image();
  }
  
  render() {
    
    this.img.onload = () => {
      this.maxWidth = this.img.width;
      this.maxHeight = this.img.height;
      this.height = this.img.height;
      this.width = this.img.width;
      if (!this.sprite) {
        this.sprite = new fabric.Image(this.img, {
          left: this.orgX,
          top: this.orgY,
          selectable:false,
          hoverCursor:'arrow'
        });
        
      }
      this.x = this.orgX + this.width/2;
      this.y = this.orgY + this.height;
      this.sprite.metadata = {};
      this.sprite.metadata = this;
      this.canvas.add(this.sprite);
      
      this.canvas.add(this.sprite);
      this.img.dispatchEvent(new Event(Globals.EVENT_DECOR_READY));
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