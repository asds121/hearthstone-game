/**
 * 奥秘区域类
 */

import type { ZoneType } from '../../types/base.types';
import type { ISecretEntity } from '../../types/entities.types';
import { Zone } from './base.zone';

/**
 * 奥秘区域
 */
export class SecretZone extends Zone {
  type: ZoneType = 'SECRET';
  maxSize: number = 5;

  getSecrets(): ISecretEntity[] {
    return this.entities as ISecretEntity[];
  }

  getQuests(): ISecretEntity[] {
    return this.entities.filter(e => (e as ISecretEntity).isQuest) as ISecretEntity[];
  }
}