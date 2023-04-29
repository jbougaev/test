// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function heightBalancedBinaryTree(tree) {
    // Write your code here.
    return isBalanced(tree);
}

function isBalanced(tree) {
    if(!tree){
        return true;
    }
    let lh = getHeight(tree.left);
    let rh =  getHeight(tree.right);
    if(Math.abs(lh-rh) > 1){
        return false;
    }

    return isBalanced(tree && tree.left) && isBalanced(tree && tree.right);

}

function getHeight(tree){
    if(!tree){
        return 0;
    }

    return 1 + Math.max(getHeight(tree.left),getHeight(tree.right) );

}

let tree = new BinaryTree(10);

tree.left = new BinaryTree(7);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(5);

tree.left.right.left = new BinaryTree(1);
tree.left.right.right = new BinaryTree(2);

// tree.left.right.right.left = new BinaryTree(-1);
// tree.left.right.right.right = new BinaryTree(0);

tree.right = new BinaryTree(15);
tree.right.left = new BinaryTree(12);
tree.right.right = new BinaryTree(40);

console.log(heightBalancedBinaryTree(tree));
