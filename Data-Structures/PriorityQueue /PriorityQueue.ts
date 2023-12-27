/*
    A data structure where each element
    has a priority. Elements with higher
    priorities are served before elements
    with lower priorities.
    This priority queue was made using a MinBinaryHeap
*/


class PQNode {
    val: string;
    priority: number;
    constructor(val: string, priority: number) {
        this.val = val;
        this.priority = priority;
    }
  }

  /*
    Time Complexity
    Insertion - O(log(n))
    Removal - O(log(n))
    Search - O(n)
*/
class PriorityQueue {
    values: PQNode[];
    constructor() {
        this.values = [];
    }
    enqueue(val: string, priority: number) {
        const newNode = new PQNode(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        if(index === 0) {
            return;
        }
        let parentIndex = Math.floor((index-1) / 2);
        console.log("parentIndex", parentIndex);
        console.log("index", index);
        console.log("values", this.values)
        while(this.values[parentIndex]?.priority > this.values[index]?.priority) {
            const tmp = {... this.values[parentIndex]};
            this.values[parentIndex] = {... this.values[index]};
            this.values[index] = tmp;
            index = parentIndex;
            parentIndex = Math.floor((index-1) / 2);
        }
    }
    dequeue() {
        if(this.values.length === 0) {
            return null;
        }
        if(this.values.length === 1) {
            return this.values.pop();
        }
        const min = this.values[0];
        const last = this.values.pop();
        this.values[0] = last!;
        this.sinkDown();
        return min;
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
                if(leftChild.priority < element.priority) {
                    idxSwap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (idxSwap === null && rightChild.priority < element.priority)
                    || (idxSwap !== null && rightChild.priority < leftChild!.priority)
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