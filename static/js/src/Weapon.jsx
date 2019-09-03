import {Globals} from './Globals.jsx'

export class Weapon {
  
  
  constructor(id, parent) {
    this.type = Globals.OBJECT_TYPE_WEAPON;
    this.id = id;
    this.parent = parent;
    this.damage = 0;
    this.icon_url = '';
    this.melee = true;
    this.name = 'weapon';
    this.speed = 1;
    this.range = 1;
    this.img = new Image();
  }
  
  async load() {
    let self = this;
    let weaponInfo = await this.parent.queryBackend('GET', Globals.API_DIR + 'weapon/' + this.id);
    if (weaponInfo) {
      console.log('weap', weaponInfo);
      self.damage = weaponInfo.damage;
      self.icon_url = weaponInfo.icon_url;
      self.melee = weaponInfo.melee;
      self.name = weaponInfo.name;
      self.speed = weaponInfo.speed;
      self.img.onload = function() {
        this.dispatchEvent(new Event(Globals.EVENT_WEAPON_READY));
      };
      self.img.src = self.icon_url;
    }
  }
  
}