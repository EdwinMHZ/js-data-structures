/*
    What's a linked list?
    A data structure that contains a head, tail and length property
    Linked Lists consits of nodes, and each node has a value and
    a pointer to another node or null

    Comparisons with Arrays
    Lists
    - Do not have indexes
    - Connected via node with a next pointer
    - Random access is not allowed

    Arrays
    - Indexed in order.
    - Insertion and deletion can be expensive
    - Can quickly be accessed at a specific index

*/

class NodeSLL {
    val: string;
    next: NodeSLL | null;
    constructor(val: string) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    length: number;
    head: NodeSLL | null;
    tail: NodeSLL | null;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val: string) {
        this.length++;
        const newNode: NodeSLL = new NodeSLL(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current: NodeSLL | null = this.head;
        let prev: NodeSLL | null = current;
        while(current.next != null) {
            prev = current;
            current = current.next;
        }
        prev!.next = null;
        this.tail = prev;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        const current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    unshift(val: string) {
        this.length++;
        const newNode: NodeSLL = new NodeSLL(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        return this;
    }
    getNode(index: number) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) {
                return current;
            }
            count++;
            current = current.next;
        }
        return undefined;
    }
}