/**
 * 队列实现 - 先进先出
 */

export class Queue<T> {
  private items: T[] = [];
  private frontIndex: number = 0;

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    this.items[this.frontIndex] = undefined as any;
    this.frontIndex++;

    // 清理内存
    if (this.frontIndex > 100) {
      this.items = this.items.slice(this.frontIndex);
      this.frontIndex = 0;
    }

    return item;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.frontIndex];
  }

  isEmpty(): boolean {
    return this.frontIndex >= this.items.length;
  }

  size(): number {
    return this.items.length - this.frontIndex;
  }

  clear(): void {
    this.items = [];
    this.frontIndex = 0;
  }

  toArray(): T[] {
    return this.items.slice(this.frontIndex);
  }
}