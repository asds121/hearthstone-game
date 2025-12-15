/**
 * 牌库区域类
 */

import type { ZoneType } from '../../types/base.types';
import type { ICardEntity } from '../../types/entities.types';
import { Zone } from './base.zone';

/**
 * 牌库区域
 */
export class DeckZone extends Zone {
  type: ZoneType = 'DECK';
  maxSize: number = 60; // 理论上无上限，但通常不超过60

  draw(): ICardEntity | null {
    if (this.isEmpty()) return null;
    return this.removeAt(this.entities.length - 1) as ICardEntity;
  }

  shuffle(): void {
    // Fisher-Yates 洗牌算法
    for (let i = this.entities.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.entities[i], this.entities[j]] = [this.entities[j], this.entities[i]];
    }
  }

  getTop(count: number): ICardEntity[] {
    return this.entities.slice(-count) as ICardEntity[];
  }

  getBottom(count: number): ICardEntity[] {
    return this.entities.slice(0, count) as ICardEntity[];
  }

  getCards(): ICardEntity[] {
    return this.entities as ICardEntity[];
  }

  toArray(): ICardEntity[] {
    return this.getCards();
  }

  find(predicate: (card: ICardEntity) => boolean): ICardEntity | null {
    return (this.entities as ICardEntity[]).find(predicate) || null;
  }

  filter(predicate: (card: ICardEntity) => boolean): ICardEntity[] {
    return (this.entities as ICardEntity[]).filter(predicate);
  }
}