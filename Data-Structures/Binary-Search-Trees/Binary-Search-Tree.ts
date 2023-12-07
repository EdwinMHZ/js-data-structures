/*
    What is a tree?
    A data structure that consists of
    nodes in parent / child relationship

    - Root: The top node in a tree
    - Child: A node directly connected to another node
    when moving away from the root
    - Parent: The converse notion of a child
    - Siblings: A group of nodes with the same parent
    - Leaf: A node with no children
    - Edge: The connectio between one node and another

*/

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
    Time Complexity
    Insertion - O(log(n))
    Searching - O(log(n))
    NOT guaranteed 
*/
class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }
    insert(val: number) {
        const newNode = new TreeNode(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                    if(val === current.val) {
                        return undefined;
                    }
                    if(val < current.val) {
                        if(current.left === null) {
                            current.left = newNode;
                            return this;
                        }
                        current = current.left;
                    } else if(val > current.val) {
                        if(current.right === null) {
                            current.right = newNode;
                            return this;
                        }
                        current = current.right;
                    }
            }
        }
    }
    find(val: number) {
        if(!this.root) {
            return undefined;
        }
        let current: TreeNode | null = this.root;
        while(current) {
            if(val === current.val) {
                return current;
            }
            if(val < current.val) {
                current = current.left;
            } else if(val > current.val) {
                current = current.right;
            }
        }
        return undefined;
    }
    breadthFirstSearch() {
        if(!this.root) {
            return [];
        }
        const queue = [];
        const visited = [];
        let current = this.root;
        queue.push(current);
        while(queue.length > 0) {
            current = queue.shift()!;
            visited.push(current.val);
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }

        return visited;
    }
    transverse(node: TreeNode, visited: number[]) {
        visited.push(node.val);
        if(node.left) {
            this.transverse(node.left, visited);
        }
        if(node.right) {
            this.transverse(node.right, visited);
        }
    }
    bfsPreOrder() {
        if(!this.root) {
            return [];
        }
        const visited: number[] = [];
        const current = this.root;
        this.transverse(current, visited);
        return visited;
    }
}