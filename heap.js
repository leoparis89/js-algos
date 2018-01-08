class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.data = [];
  }

  left(nodeIndex) {
    return (2 * nodeIndex) + 1;
  }

  right(nodeIndex) {
    return (2 * nodeIndex) + 2;
  }

  parent(nodeIndex) {
    return nodeIndex % 2 == 0
        ? (nodeIndex - 2 ) / 2
        : (nodeIndex - 1) / 2;
  }

  /**
   * Add element to the Heap in O(logn)
   */
  add(element) {
    this.data.push(element);
    this.siftUp(this.data.length - 1);
  }

  /**
   * Moves the node at the given index to it's proper place in the heap
   * @param index The index of the node to move up
   */
  siftUp(index) {
    let parent = this.parent(index);
      while (index > 0 && this.compareFn(this.data[parent], this.data[index]) > 0) {
        [this.data[parent], this.data[index]] =  [this.data[index], this.data[parent]];
        index = parent;
        parent = this.parent(index);
      }

  }

  /**
   * Moves the node at the given index down to its proper place in the heap.
   * @param nodeIndex The index of the node to move down
   */
  siftDown(nodeIndex) {
    /** @returns the index containing the smallest value */
    const minIndex = (left, right) => {
      if (right >= this.data.length) {
        if (left >= this.data.length) {
          return -1;
        } else {
          return left;
        }
      } else {
        if (this.compareFn(this.data[left], this.data[left]) <= 0 ) {
          return left;
        } else {
          return right;
        }
      }
    };

    let min = minIndex(this.left[nodeIndex], this.right[nodeIndex]);

    while (
        min >= 0
        && this.compareFn(this.data[nodeIndex], this.data[min] > 0)
        ) {
      [this.data[min], this.data[nodeIndex]] =  [this.data[nodeIndex], this.data[min]];
      nodeIndex = min;
      min = minIndex(this.left(nodeIndex),
          this.right(nodeIndex));
    }
  }

  /**
   * Retrieves and removes the root element of this heap in O(logn)
   * - Returns undefined if the heap is empty.
   */
  extractRoot(){
    if (this.data.length > 0) {
      const root = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        this.siftDown(0);
      }
      return root;
    }
  }

  /**
   * Returns the number of elements in the heap in O(1)
   */
  size() {
    return this.data.length;
  }

  /**
   * Retrieves but does not remove the root element of this heap in O(1)
   * - Returns undefined if the heap is empty.
   */
  peek() {
    if (this.data.length > 0) {
      return this.data[0];
    } else {
      return undefined;
    }
  }
}

const heap = new Heap((a, b) => a - b);
heap.add(1);
heap.add(3);
heap.add(2);
console.log(heap.size()); // 3

console.log(heap.extractRoot()); // 1
console.log(heap.extractRoot()); // 2
console.log(heap.extractRoot()); // 3
