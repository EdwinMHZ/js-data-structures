/*
    What is a stack?
    A LIFO data structure
    The last element added in the stack will be
    the first element removed from the stack

    We can create an array using pop and push

*/

class StackNode {
    val: string;
    next: StackNode | null;
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
class Stack {
    size: number;
    first: StackNode | null;
    last: StackNode | null;
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    pop() {
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
    push(val: string) {
        this.size++;
        const newNode: StackNode = new StackNode(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return this;
    }
}