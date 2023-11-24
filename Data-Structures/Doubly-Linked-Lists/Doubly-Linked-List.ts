/*
    Almost identical to Singly Linked Lists,
    except every node has another pointer,
    to the previous node
*/

class NodeDLL {
    val: string;
    next: NodeDLL | null;
    prev: NodeDLL | null;
    constructor(val: string) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    length: number;
    head: NodeDLL | null;
    tail: NodeDLL | null;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    print() {
        let currentNode = this.head;
        while(currentNode) {
            console.log("Prev:", currentNode.prev?.val);
            console.log("Current:", currentNode.val);
            console.log("Next:", currentNode.next?.val);
            console.log("->")
            currentNode = currentNode.next;
        }
    }
}