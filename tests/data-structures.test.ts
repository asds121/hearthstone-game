/**
 * 数据结构测试
 */

import {
  Queue,
  Deque,
  LinkedList,
  LinkedListNode,
  Stack,
  List,
  FixedArray,
  PriorityQueue,
  HashMap,
  Set,
  TreeNode,
  Graph
} from '../src/data-structures';

describe('Data Structures', () => {
  describe('队列 (Queue)', () => {
    let queue: Queue<number>;

    beforeEach(() => {
      queue = new Queue<number>();
    });

    test('应该正确执行基本队列操作', () => {
      expect(queue.isEmpty()).toBe(true);
      expect(queue.size()).toBe(0);

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.size()).toBe(3);
      expect(queue.isEmpty()).toBe(false);
      expect(queue.peek()).toBe(1);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.size()).toBe(1);

      expect(queue.dequeue()).toBe(3);
      expect(queue.isEmpty()).toBe(true);
      expect(queue.dequeue()).toBeUndefined();
    });

    test('应该正确转换为数组', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      const array = queue.toArray();
      expect(array).toEqual([1, 2, 3]);
    });

    test('应该正确清空', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.clear();

      expect(queue.isEmpty()).toBe(true);
      expect(queue.size()).toBe(0);
    });
  });

  describe('双向队列 (Deque)', () => {
    let deque: Deque<number>;

    beforeEach(() => {
      deque = new Deque<number>();
    });

    test('应该正确执行双向操作', () => {
      expect(deque.isEmpty()).toBe(true);

      deque.pushBack(1);
      deque.pushBack(2);
      deque.pushFront(0);

      expect(deque.size()).toBe(3);
      expect(deque.peekFront()).toBe(0);
      expect(deque.peekBack()).toBe(2);

      expect(deque.popFront()).toBe(0);
      expect(deque.popBack()).toBe(2);
      expect(deque.size()).toBe(1);

      expect(deque.popFront()).toBe(1);
      expect(deque.isEmpty()).toBe(true);
    });

    test('应该正确处理空队列', () => {
      expect(deque.popFront()).toBeUndefined();
      expect(deque.popBack()).toBeUndefined();
      expect(deque.peekFront()).toBeUndefined();
      expect(deque.peekBack()).toBeUndefined();
    });
  });

  describe('链表 (LinkedList)', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
    });

    test('应该正确执行基本链表操作', () => {
      expect(list.isEmpty()).toBe(true);
      expect(list.size()).toBe(0);

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.size()).toBe(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test('应该正确在头部插入', () => {
      list.prepend(2);
      list.prepend(1);
      list.append(3);

      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    test('应该正确在指定位置插入', () => {
      list.append(1);
      list.append(3);
      list.insert(1, 2);

      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    test('应该正确删除节点', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      const removed = list.remove(1);
      expect(removed).toBe(2);
      expect(list.toArray()).toEqual([1, 3]);
    });

    test('应该正确查找节点', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      const found = list.find(value => value === 2);
      expect(found).toBe(2);

      const notFound = list.find(value => value === 4);
      expect(notFound).toBeUndefined();
    });

    test('应该正确遍历', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      const result: number[] = [];
      for (const value of list) {
        result.push(value);
      }
      expect(result).toEqual([1, 2, 3]);
    });

    test('应该正确处理空链表', () => {
      expect(list.get(0)).toBeUndefined();
      expect(list.remove(0)).toBeUndefined();
      expect(list.find(() => true)).toBeUndefined();
    });
  });

  describe('栈 (Stack)', () => {
    let stack: Stack<number>;

    beforeEach(() => {
      stack = new Stack<number>();
    });

    test('应该正确执行栈操作', () => {
      expect(stack.isEmpty()).toBe(true);

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.size()).toBe(3);
      expect(stack.peek()).toBe(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.size()).toBe(1);

      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
      expect(stack.pop()).toBeUndefined();
    });

    test('应该正确转换为数组', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      const array = stack.toArray();
      expect(array).toEqual([3, 2, 1]); // 栈顶在前
    });
  });

  describe('列表 (List)', () => {
    let list: List<number>;

    beforeEach(() => {
      list = new List<number>();
    });

    test('应该正确执行列表操作', () => {
      expect(list.isEmpty()).toBe(true);

      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.size()).toBe(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test('应该正确在指定位置添加', () => {
      list.add(1);
      list.add(3);
      list.addAt(1, 2);

      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    test('应该正确删除元素', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      const removed = list.remove(2);
      expect(removed).toBe(true);
      expect(list.toArray()).toEqual([1, 3]);

      const notRemoved = list.remove(4);
      expect(notRemoved).toBe(false);
    });

    test('应该正确查找元素', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      const found = list.find(value => value === 2);
      expect(found).toBe(2);

      const notFound = list.find(value => value === 4);
      expect(notFound).toBeUndefined();
    });

    test('应该正确过滤元素', () => {
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);

      const filtered = list.filter(value => value % 2 === 0);
      expect(filtered).toEqual([2, 4]);
    });

    test('应该正确排序', () => {
      list.add(3);
      list.add(1);
      list.add(4);
      list.add(2);

      list.sort((a, b) => a - b);
      expect(list.toArray()).toEqual([1, 2, 3, 4]);
    });
  });

  describe('固定数组 (FixedArray)', () => {
    let array: FixedArray<number>;

    beforeEach(() => {
      array = new FixedArray<number>(5);
    });

    test('应该正确创建固定数组', () => {
      expect(array.length).toBe(5);
      expect(array.get(0)).toBeUndefined();
    });

    test('应该正确设置和获取值', () => {
      array.set(0, 10);
      array.set(2, 30);
      array.set(4, 50);

      expect(array.get(0)).toBe(10);
      expect(array.get(2)).toBe(30);
      expect(array.get(4)).toBe(50);
    });

    test('应该抛出越界错误', () => {
      expect(() => array.get(-1)).toThrow();
      expect(() => array.get(5)).toThrow();
      expect(() => array.set(-1, 10)).toThrow();
      expect(() => array.set(5, 10)).toThrow();
    });

    test('应该正确填充', () => {
      array.fill(42);
      
      for (let i = 0; i < 5; i++) {
        expect(array.get(i)).toBe(42);
      }
    });

    test('应该正确转换为数组', () => {
      array.set(0, 10);
      array.set(2, 30);
      array.set(4, 50);

      const result = array.toArray();
      expect(result).toEqual([10, 30, 50]);
    });
  });

  describe('优先队列 (PriorityQueue)', () => {
    let pq: PriorityQueue<string>;

    beforeEach(() => {
      pq = new PriorityQueue<string>();
    });

    test('应该正确执行优先队列操作', () => {
      expect(pq.isEmpty()).toBe(true);

      pq.enqueue('low', 10);
      pq.enqueue('high', 1);
      pq.enqueue('medium', 5);

      expect(pq.size()).toBe(3);
      expect(pq.peek()).toBe('high');

      expect(pq.dequeue()).toBe('high');
      expect(pq.dequeue()).toBe('medium');
      expect(pq.dequeue()).toBe('low');
      expect(pq.isEmpty()).toBe(true);
    });

    test('应该正确处理相同优先级', () => {
      pq.enqueue('first', 5);
      pq.enqueue('second', 5);
      pq.enqueue('third', 5);

      expect(pq.dequeue()).toBe('first');
      expect(pq.dequeue()).toBe('second');
      expect(pq.dequeue()).toBe('third');
    });
  });

  describe('哈希表 (HashMap)', () => {
    let map: HashMap<string, number>;

    beforeEach(() => {
      map = new HashMap<string, number>();
    });

    test('应该正确执行哈希表操作', () => {
      expect(map.isEmpty()).toBe(true);

      map.set('one', 1);
      map.set('two', 2);
      map.set('three', 3);

      expect(map.size()).toBe(3);
      expect(map.get('two')).toBe(2);
      expect(map.contains('two')).toBe(true);

      map.remove('two');
      expect(map.contains('two')).toBe(false);
      expect(map.get('two')).toBeUndefined();
    });

    test('应该正确处理键数组和值数组', () => {
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);

      const keys = map.keysArray();
      const values = map.valuesArray();

      expect(keys).toContain('a');
      expect(keys).toContain('b');
      expect(keys).toContain('c');
      expect(values).toContain(1);
      expect(values).toContain(2);
      expect(values).toContain(3);
    });
  });

  describe('集合 (Set)', () => {
    let set: Set<number>;

    beforeEach(() => {
      set = new Set<number>();
    });

    test('应该正确执行集合操作', () => {
      expect(set.isEmpty()).toBe(true);

      set.add(1);
      set.add(2);
      set.add(3);

      expect(set.size()).toBe(3);
      expect(set.contains(2)).toBe(true);

      set.remove(2);
      expect(set.contains(2)).toBe(false);
      expect(set.size()).toBe(2);
    });

    test('应该正确执行集合运算', () => {
      const set1 = new Set<number>();
      set1.add(1);
      set1.add(2);
      set1.add(3);

      const set2 = new Set<number>();
      set2.add(2);
      set2.add(3);
      set2.add(4);

      const union = set1.union(set2);
      expect(union.size()).toBe(4);
      expect(union.toArray()).toContain(1);
      expect(union.toArray()).toContain(4);

      const intersection = set1.intersection(set2);
      expect(intersection.size()).toBe(2);
      expect(intersection.toArray()).toContain(2);
      expect(intersection.toArray()).toContain(3);

      const difference = set1.difference(set2);
      expect(difference.size()).toBe(1);
      expect(difference.toArray()).toContain(1);
    });
  });

  describe('树节点 (TreeNode)', () => {
    test('应该正确创建树结构', () => {
      const root = new TreeNode('root');
      const child1 = new TreeNode('child1');
      const child2 = new TreeNode('child2');
      const grandchild = new TreeNode('grandchild');

      root.addChild(child1);
      root.addChild(child2);
      child1.addChild(grandchild);

      expect(root.children).toHaveLength(2);
      expect(child1.children).toHaveLength(1);
      expect(child1.parent).toBe(root);
      expect(grandchild.parent).toBe(child1);
    });

    test('应该正确计算深度和高度', () => {
      const root = new TreeNode('root');
      const child1 = new TreeNode('child1');
      const child2 = new TreeNode('child2');
      const grandchild = new TreeNode('grandchild');

      root.addChild(child1);
      root.addChild(child2);
      child1.addChild(grandchild);

      expect(root.getDepth()).toBe(1);
      expect(grandchild.getDepth()).toBe(3);

      expect(root.getHeight()).toBe(3);
      expect(child2.getHeight()).toBe(1);
    });
  });

  describe('图 (Graph)', () => {
    let graph: Graph<string>;

    beforeEach(() => {
      graph = new Graph<string>();
    });

    test('应该正确创建图结构', () => {
      expect(graph.isEmpty()).toBe(true);
      expect(graph.size()).toBe(0);
    });

    test('应该正确添加顶点和边', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');

      expect(graph.hasVertex('A')).toBe(true);
      expect(graph.hasVertex('B')).toBe(true);
      expect(graph.hasEdge('A', 'B')).toBe(true);
      expect(graph.size()).toBe(2);
    });

    test('应该正确处理邻居', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'C');

      const neighborsA = graph.getNeighbors('A');
      expect(neighborsA).toContain('B');
      expect(neighborsA).toContain('C');
      expect(neighborsA).toHaveLength(2);
    });

    test('应该正确移除顶点', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      const removed = graph.removeVertex('B');
      expect(removed).toBe(true);
      expect(graph.hasVertex('B')).toBe(false);
      expect(graph.hasEdge('A', 'B')).toBe(false);
      expect(graph.hasEdge('B', 'C')).toBe(false);
    });

    test('应该正确移除边', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      const removed = graph.removeEdge('A', 'B');
      expect(removed).toBe(true);
      expect(graph.hasEdge('A', 'B')).toBe(false);
      expect(graph.hasEdge('B', 'C')).toBe(true);
    });

    test('应该正确获取边列表', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'D');

      const edges = graph.getEdges();
      expect(edges).toHaveLength(3);
      
      // 检查边的存在（顺序可能不同）
      const edgeStrings = edges.map(([a, b]) => `${a}-${b}`);
      expect(edgeStrings).toContain('A-B');
      expect(edgeStrings).toContain('B-C');
      expect(edgeStrings).toContain('C-D');
    });
  });
});