/**
 * 哈希表实现
 */

export class HashMap<K, V> {
  private items: { [key: string]: V } = {};
  private keys: K[] = [];

  set(key: K, value: V): void {
    const stringKey = this.toStringKey(key);
    if (!(stringKey in this.items)) {
      this.keys.push(key);
    }
    this.items[stringKey] = value;
  }

  get(key: K): V | undefined {
    const stringKey = this.toStringKey(key);
    return this.items[stringKey];
  }

  remove(key: K): boolean {
    const stringKey = this.toStringKey(key);
    if (stringKey in this.items) {
      delete this.items[stringKey];
      const index = this.keys.indexOf(key);
      if (index !== -1) {
        this.keys.splice(index, 1);
      }
      return true;
    }
    return false;
  }

  contains(key: K): boolean {
    const stringKey = this.toStringKey(key);
    return stringKey in this.items;
  }

  keysArray(): K[] {
    return [...this.keys];
  }

  valuesArray(): V[] {
    return this.keys.map(key => this.get(key)!);
  }

  size(): number {
    return this.keys.length;
  }

  isEmpty(): boolean {
    return this.keys.length === 0;
  }

  clear(): void {
    this.items = {};
    this.keys = [];
  }

  private toStringKey(key: K): string {
    return typeof key === 'string' ? key : JSON.stringify(key);
  }
}