/**
 * 手牌区域类
 */

import type { ZoneType } from '../../types/base.types';
import type { ICardEntity } from '../../types/entities.types';
import { Zone } from './base.zone';

/**
 * 手牌区域
 */
export class HandZone extends Zone {
  type: ZoneType = 'HAND';
  maxSize: number = 10;

  getCards(): ICardEntity[] {
    return this.entities as ICardEntity[];
  }
}