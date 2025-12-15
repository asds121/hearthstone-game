/**
 * 可排序列表
 */

export class List<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  addAt(index: number, item: T): void {
    if (index < 0 || index > this.items.length) {
      throw new Error('Index out of bounds');
    }
    this.items.splice(index, 0, item);
  }

  remove(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined;
    }
    return this.items.splice(index, 1)[0];
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  set(index: number, item: T): void {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    this.items[index] = item;
  }

  indexOf(item: T): number {
    return this.items.indexOf(item);
  }

  contains(item: T): boolean {
    return this.items.includes(item);
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  sort(compareFn?: (a: T, b: T) => number): void {
    this.items.sort(compareFn);
  }

  filter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  map<U>(callback: (item: T, index: number) => U): U[] {
    return this.items.map(callback);
  }

  forEach(callback: (item: T, index: number) => void): void {
    this.items.forEach(callback);
  }

  toArray(): T[] {
    return [...this.items];
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this.items.length; i++) {
      yield this.items[i];
    }
  }
}