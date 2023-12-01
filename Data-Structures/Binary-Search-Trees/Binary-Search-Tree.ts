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

class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }
}