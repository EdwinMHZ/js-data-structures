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
}