/**
 * 集合实现
 */

export class Set<T> {
  private items: { [key: string]: T } = {};

  add(item: T): void {
    const key = this.toStringKey(item);
    this.items[key] = item;
  }

  remove(item: T): boolean {
    const key = this.toStringKey(item);
    if (key in this.items) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  contains(item: T): boolean {
    const key = this.toStringKey(item);
    return key in this.items;
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  isEmpty(): boolean {
    return Object.keys(this.items).length === 0;
  }

  clear(): void {
    this.items = {};
  }

  toArray(): T[] {
    return Object.values(this.items);
  }

  union(other: Set<T>): Set<T> {
    const result = new Set<T>();
    this.toArray().forEach(item => result.add(item));
    other.toArray().forEach(item => result.add(item));
    return result;
  }

  intersection(other: Set<T>): Set<T> {
    const result = new Set<T>();
    this.toArray().forEach(item => {
      if (other.contains(item)) {
        result.add(item);
      }
    });
    return result;
  }

  difference(other: Set<T>): Set<T> {
    const result = new Set<T>();
    this.toArray().forEach(item => {
      if (!other.contains(item)) {
        result.add(item);
      }
    });
    return result;
  }

  private toStringKey(item: T): string {
    return typeof item === 'string' ? item : JSON.stringify(item);
  }
}