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
    push(val: string) {
        this.length++;
        const newNode: NodeDLL = new NodeDLL(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            if(current?.prev) {
                current.prev.next = null;
            }
            this.tail = current!.prev;
            current!.prev = null;
        }
        this.length--;
        return current;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        const current = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = current.next;
            this.head!.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }
}