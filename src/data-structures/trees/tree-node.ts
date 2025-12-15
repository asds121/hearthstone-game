/**
 * 树节点
 */

export class TreeNode<T> {
  value: T;
  children: TreeNode<T>[] = [];
  parent: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  addChild(child: TreeNode<T>): void {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child: TreeNode<T>): boolean {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parent = null;
      return true;
    }
    return false;
  }

  getDepth(): number {
    let depth = 0;
    let current: TreeNode<T> | null = this;
    while (current) {
      depth++;
      current = current.parent;
    }
    return depth;
  }

  getHeight(): number {
    if (this.children.length === 0) return 1;
    return 1 + Math.max(...this.children.map(child => child.getHeight()));
  }
}