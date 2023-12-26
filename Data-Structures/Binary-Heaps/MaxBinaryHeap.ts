/*
    What is a binary heap?
    Very similar to a binary search tree, but
    with some different rules.
    In a MaxBinaryHeap, parent nodes are always larger
    than child nodes. In a MinBinaryHeap, parent nodes
    are always smaller than child nodes.
    
    Binary Heaps are used to implement Priority Queues,
    which are very commonly used data structures.
    They are also used quite a bit, with graph
    traversal algorithms
*/

class MaxBinaryHeap {
    values: number[];
    constructor() {
        this.values = [];
    }
    insert(val: number) {
        this.values.push(val);
        let index = this.values.length - 1;
        if(index === 0) {
            return;
        }
        let parentIndex = Math.floor((index-1) / 2);
        while(this.values[parentIndex] < this.values[index]) {
            const tmp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = tmp;
            index = parentIndex;
            parentIndex = Math.floor((index-1) / 2);
        }
    }
    extractMax() {
        if(this.values.length === 0) {
            return null;
        }
        if(this.values.length === 1) {
            return this.values.pop();
        }
        const max = this.values[0];
        const last = this.values.pop();
        this.values[0] = last!;
        this.sinkDown();
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let idxSwap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    idxSwap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (idxSwap === null && rightChild > element)
                    || (idxSwap !== null && rightChild > leftChild!)
                ) {
                    idxSwap = rightChildIdx;
                }
            }

            if(idxSwap === null) {
                break;
            }
            this.values[idx] = this.values[idxSwap];
            this.values[idxSwap] = element;
            idx = idxSwap;

        }
    }
}