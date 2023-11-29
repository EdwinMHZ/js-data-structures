/*
    What is a queue?
    A FIFO data structure
    The first element added in the queue will be
    the first element removed from the stack

    We can create a queue using an array with the 
    methods push and shift or unshift and pop

*/

class QueueNode {
    val: string;
    next: QueueNode | null;
    constructor(val: string) {
        this.val = val;
        this.next = null;
    }
}

/*
    Time Complexity
    Insertion O(1)
    Removal - O(1)
    Searching O(n)
    Access O(n)
*/
class Queue {
    size: number;
    first: QueueNode | null;
    last: QueueNode | null;
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(val: string) {
        this.size++;
        const newNode: QueueNode = new QueueNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last!.next = newNode;
            this.last = newNode;
        }
        return this;
    }
    dequeue() {
        if(!this.first) {
            return undefined;
        }
        const current = this.first;
        this.first = current.next;
        this.size--;
        if(this.size === 0) {
            this.last = null;
        }
        return current;
    }
}