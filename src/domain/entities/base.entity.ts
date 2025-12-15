/**
 * 基础实体类
 */

import type { EntityID, PlayerID, ZoneType, ZonePosition } from '../../types/base.types';
import type { IEntity } from '../../types/entities.types';
import { GameError, GameErrorCode } from '../../types/keywords.types';

/**
 * 基础实体实现
 */
export abstract class Entity implements IEntity {
  id: EntityID;
  cardId: string;
  zone: ZoneType;
  zonePosition: ZonePosition;
  controller: PlayerID;
  creator: EntityID;
  tags: Map<string, any>;

  constructor(
    id: EntityID,
    cardId: string,
    controller: PlayerID,
    creator: EntityID = 0,
    zone: ZoneType = 'PLAY'
  ) {
    this.id = id;
    this.cardId = cardId;
    this.controller = controller;
    this.creator = creator;
    this.zone = zone;
    this.zonePosition = 0;
    this.tags = new Map();
  }

  getTag(key: string): any {
    return this.tags.get(key);
  }

  setTag(key: string, value: any): void {
    this.tags.set(key, value);
  }

  hasTag(key: string): boolean {
    return this.tags.has(key);
  }

  removeTag(key: string): boolean {
    return this.tags.delete(key);
  }
}