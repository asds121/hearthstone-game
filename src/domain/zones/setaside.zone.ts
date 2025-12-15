/**
 * 除外区域类
 */

import type { ZoneType } from '../../types/base.types';
import { Zone } from './base.zone';

/**
 * 除外区域
 */
export class SetasideZone extends Zone {
  type: ZoneType = 'SETASIDE';
  maxSize: number = Infinity;
}