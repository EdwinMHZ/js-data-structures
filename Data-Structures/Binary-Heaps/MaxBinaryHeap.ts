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
}