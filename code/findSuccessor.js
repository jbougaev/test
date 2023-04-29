// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    if (node.right != null) {
        return getLeft(node.right);
    }
    return getParent(node);
}

function getLeft(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function getParent(node) {
    if (node.parent !== null) {
        if (node.parent.left === node) {
            return node.parent;
        } else if (node.parent.right === node) {
            return node.parent.parent !== null ? node.parent.parent : null;
        }
        return null;
    }
    return null;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
