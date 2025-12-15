/**
 * 墓地区域类
 */

import type { ZoneType } from '../../types/base.types';
import { Zone } from './base.zone';

/**
 * 墓地区域
 */
export class GraveyardZone extends Zone {
  type: ZoneType = 'GRAVEYARD';
  maxSize: number = Infinity;
}