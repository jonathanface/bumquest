import {Globals} from './Globals.jsx'
import {Engine} from './Engine.jsx';

export class Weapon extends Engine {
  
  
  constructor(id) {
    super();
    this.type = Globals.OBJECT_TYPE_WEAPON;
    this.id = id;
    this.damage = 0;
    this.icon_url = '';
    this.melee = true;
    this.name = 'weapon';
    this.speed = 1;
    this.range = 1;
    this.img = new Image();
  }
  
  async load() {
    let weaponInfo = await this.queryBackend('GET', Globals.API_DIR + 'weapon/' + this.id);
    if (weaponInfo) {
      console.log('weap', weaponInfo);
      this.damage = weaponInfo.damage;
      this.icon_url = weaponInfo.icon_url;
      this.melee = weaponInfo.melee;
      this.name = weaponInfo.name;
      this.speed = weaponInfo.speed;
      this.img.onload = () => {
        this.img.dispatchEvent(new Event(Globals.EVENT_WEAPON_READY));
      };
      this.img.src = this.icon_url;
    }
  }
  
}