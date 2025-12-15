/**
 * 战场区域类
 */

import type { ZoneType } from '../../types/base.types';
import type { IMinionEntity, IHeroEntity, IWeaponEntity } from '../../types/entities.types';
import { Zone } from './base.zone';
import { MinionEntity, HeroEntity, WeaponEntity } from '../entities';

/**
 * 战场区域
 */
export class BattlefieldZone extends Zone {
  type: ZoneType = 'PLAY';
  maxSize: number = 7;

  getMinions(): IMinionEntity[] {
    return this.entities.filter(e => e instanceof MinionEntity) as IMinionEntity[];
  }

  getHero(): IHeroEntity | null {
    return this.entities.find(e => e instanceof HeroEntity) as IHeroEntity || null;
  }

  getWeapon(): IWeaponEntity | null {
    return this.entities.find(e => e instanceof WeaponEntity) as IWeaponEntity || null;
  }

  getTauntMinions(): IMinionEntity[] {
    return this.getMinions().filter(m => (m as MinionEntity).TAUNT);
  }

  hasTauntMinions(): boolean {
    return this.getTauntMinions().length > 0;
  }
}