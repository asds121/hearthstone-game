/**
 * 固定大小数组
 */

export class FixedArray<T> {
  private items: (T | undefined)[];
  private size: number;

  constructor(size: number, defaultValue?: T) {
    this.size = size;
    this.items = new Array(size);
    if (defaultValue !== undefined) {
      this.items.fill(defaultValue);
    }
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    return this.items[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    this.items[index] = value;
  }

  fill(value: T): void {
    this.items.fill(value);
  }

  toArray(): T[] {
    return this.items.filter(item => item !== undefined) as T[];
  }

  get length(): number {
    return this.size;
  }
}