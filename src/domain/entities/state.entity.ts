/**
 * 状态实体类
 */

import type { EntityID } from '../../types/base.types';
import type { IStateEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 状态实体
 */
export class StateEntity extends Entity implements IStateEntity {
  cardId: 'STATE';
  attachedTo: EntityID;
  source: EntityID;
  isEnchant: boolean;
  isOneTurnEffect: boolean;
  isAura: boolean;
  enchantmentType: 'ATTACK' | 'HEALTH' | 'COST' | 'KEYWORD' | 'ABILITY';
  value: number;

  constructor(
    id: EntityID,
    attachedTo: EntityID,
    source: EntityID,
    enchantmentType: 'ATTACK' | 'HEALTH' | 'COST' | 'KEYWORD' | 'ABILITY',
    value: number
  ) {
    super(id, 'STATE', 1);
    this.cardId = 'STATE';
    this.attachedTo = attachedTo;
    this.source = source;
    this.enchantmentType = enchantmentType;
    this.value = value;
    this.isEnchant = true;
    this.isOneTurnEffect = false;
    this.isAura = false;
  }
}