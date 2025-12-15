/**
 * 《炉石传说》区域系统类型定义
 */

import { ZoneType, ZonePosition } from './base.types';
import { IEntity } from './entities.types';

/**
 * 区域接口
 */
export interface IZone {
  type: ZoneType;
  entities: IEntity[];
  maxSize: number;
  
  add(entity: IEntity, position?: ZonePosition): boolean;
  remove(entity: IEntity): boolean;
  removeAt(position: ZonePosition): IEntity | null;
  get(position: ZonePosition): IEntity | null;
  getAll(): IEntity[];
  getCount(): number;
  isFull(): boolean;
  isEmpty(): boolean;
  contains(entity: IEntity): boolean;
  find(predicate: (entity: IEntity) => boolean): IEntity | null;
  filter(predicate: (entity: IEntity) => boolean): IEntity[];
}