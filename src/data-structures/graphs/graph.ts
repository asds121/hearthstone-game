/**
 * 图实现
 */

import { Set } from '../maps/set';

export class Graph<T extends { toString(): string }> {
  private adjacencyList: Map<T, Set<T>> = new Map();

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set<T>());
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.add(vertex2);
    this.adjacencyList.get(vertex2)!.add(vertex1); // 无向图
  }

  removeVertex(vertex: T): boolean {
    if (!this.adjacencyList.has(vertex)) return false;

    // 移除所有相关的边
    const neighbors = this.adjacencyList.get(vertex)!.toArray();
    neighbors.forEach(neighbor => {
      this.adjacencyList.get(neighbor)!.remove(vertex);
    });

    this.adjacencyList.delete(vertex);
    return true;
  }

  removeEdge(vertex1: T, vertex2: T): boolean {
    const neighbors1 = this.adjacencyList.get(vertex1);
    const neighbors2 = this.adjacencyList.get(vertex2);
    
    if (!neighbors1 || !neighbors2) return false;

    const removed1 = neighbors1.remove(vertex2);
    const removed2 = neighbors2.remove(vertex1);
    
    return removed1 && removed2;
  }

  getNeighbors(vertex: T): T[] {
    return this.adjacencyList.get(vertex)?.toArray() || [];
  }

  hasVertex(vertex: T): boolean {
    return this.adjacencyList.has(vertex);
  }

  hasEdge(vertex1: T, vertex2: T): boolean {
    const neighbors = this.adjacencyList.get(vertex1);
    return neighbors ? neighbors.contains(vertex2) : false;
  }

  getVertices(): T[] {
    return Array.from(this.adjacencyList.keys());
  }

  getEdges(): [T, T][] {
    const edges: [T, T][] = [];
    this.adjacencyList.forEach((neighbors, vertex) => {
      neighbors.toArray().forEach(neighbor => {
        // 避免重复边
        if (vertex.toString() < neighbor.toString()) {
          edges.push([vertex, neighbor]);
        }
      });
    });
    return edges;
  }

  size(): number {
    return this.adjacencyList.size;
  }

  isEmpty(): boolean {
    return this.adjacencyList.size === 0;
  }

  clear(): void {
    this.adjacencyList.clear();
  }
}