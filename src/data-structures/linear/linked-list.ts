/**
 * 链表节点
 */
export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null = null;
  prev: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * 双向链表实现
 */
export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private length: number = 0;

  append(value: T): void {
    const newNode = new LinkedListNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      (this.tail as LinkedListNode<T>).next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  prepend(value: T): void {
    const newNode = new LinkedListNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    
    this.length++;
  }

  insert(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new LinkedListNode(value);
    const current = this.getNode(index);
    
    if (current) {
      newNode.next = current;
      newNode.prev = current.prev;
      (current.prev as LinkedListNode<T>).next = newNode;
      current.prev = newNode;
      this.length++;
    }
  }

  remove(index: number): T | undefined {
    const node = this.getNode(index);
    if (!node) return undefined;

    return this.removeNode(node);
  }

  removeNode(node: LinkedListNode<T>): T {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    this.length--;
    return node.value;
  }

  get(index: number): T | undefined {
    const node = this.getNode(index);
    return node?.value;
  }

  private getNode(index: number): LinkedListNode<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current: LinkedListNode<T> | null = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }

    return current;
  }

  find(predicate: (value: T) => boolean): T | undefined {
    let current = this.head;
    while (current) {
      if (predicate(current.value)) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  findNode(predicate: (value: T) => boolean): LinkedListNode<T> | null {
    let current = this.head;
    while (current) {
      if (predicate(current.value)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}