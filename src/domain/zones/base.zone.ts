/**
 * 区域基类
 */

import type { ZonePosition, ZoneType } from '../../types/base.types';
import type { IZone } from '../../types/zones.types';
import type { IEntity } from '../../types/entities.types';
import { GameError, GameErrorCode } from '../../types/keywords.types';

/**
 * 区域基类
 */
export abstract class Zone implements IZone {
  abstract type: ZoneType;
  entities: IEntity[];
  abstract maxSize: number;

  constructor() {
    this.entities = [];
  }

  add(entity: IEntity, position?: ZonePosition): boolean {
    if (this.isFull()) {
      throw new GameError(GameErrorCode.ZONE_FULL, `Zone ${this.type} is full`);
    }

    const pos = position ?? this.entities.length;
    if (pos < 0 || pos > this.entities.length) {
      throw new GameError(GameErrorCode.INVALID_OPERATION, `Invalid position ${position} for zone ${this.type}`);
    }

    entity.zone = this.type;
    entity.zonePosition = pos;
    this.entities.splice(pos, 0, entity);

    // 更新后续实体的位置
    for (let i = pos + 1; i < this.entities.length; i++) {
      this.entities[i].zonePosition = i;
    }

    return true;
  }

  remove(entity: IEntity): boolean {
    const index = this.entities.indexOf(entity);
    if (index === -1) return false;
    return this.removeAt(index) !== null;
  }

  removeAt(position: ZonePosition): IEntity | null {
    if (position < 0 || position >= this.entities.length) {
      return null;
    }

    const entity = this.entities.splice(position, 1)[0];
    entity.zone = 'REMOVEDFROMGAME';
    entity.zonePosition = 0;

    // 更新后续实体的位置
    for (let i = position; i < this.entities.length; i++) {
      this.entities[i].zonePosition = i;
    }

    return entity;
  }

  get(position: ZonePosition): IEntity | null {
    return this.entities[position] || null;
  }

  getAll(): IEntity[] {
    return [...this.entities];
  }

  getCount(): number {
    return this.entities.length;
  }

  isFull(): boolean {
    return this.entities.length >= this.maxSize;
  }

  isEmpty(): boolean {
    return this.entities.length === 0;
  }

  contains(entity: IEntity): boolean {
    return this.entities.includes(entity);
  }

  find(predicate: (entity: IEntity) => boolean): IEntity | null {
    return this.entities.find(predicate) || null;
  }

  filter(predicate: (entity: IEntity) => boolean): IEntity[] {
    return this.entities.filter(predicate);
  }

  /**
   * 根据入场顺序获取实体
   */
  getByPlayOrder(): IEntity[] {
    return [...this.entities].sort((a, b) => {
      const aTurn = a.getTag('NUM_TURNS_IN_PLAY') || 0;
      const bTurn = b.getTag('NUM_TURNS_IN_PLAY') || 0;
      if (aTurn !== bTurn) return aTurn - bTurn;
      return a.id - b.id;
    });
  }
}