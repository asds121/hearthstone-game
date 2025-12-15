/**
 * 双向队列实现
 */

export class Deque<T> {
  private items: T[] = [];
  private frontIndex: number = 0;
  private backIndex: number = -1;

  pushFront(item: T): void {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  pushBack(item: T): void {
    this.backIndex++;
    this.items[this.backIndex] = item;
  }

  popFront(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    this.items[this.frontIndex] = undefined as any;
    this.frontIndex++;
    return item;
  }

  popBack(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.backIndex];
    this.items[this.backIndex] = undefined as any;
    this.backIndex--;
    return item;
  }

  peekFront(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.frontIndex];
  }

  peekBack(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.backIndex];
  }

  isEmpty(): boolean {
    return this.frontIndex > this.backIndex;
  }

  size(): number {
    return this.backIndex - this.frontIndex + 1;
  }

  clear(): void {
    this.items = [];
    this.frontIndex = 0;
    this.backIndex = -1;
  }
}