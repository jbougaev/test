class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxPathSum(tree) {
    let ar = [];
    let max = {m: -Infinity};
    helper(tree, max);
    return max.m;
  }
  
  function helper(tree, max){
    if(!tree){
      return 0;
    }
  
    let l = Math.max(0, helper(tree.left, max));
    let r = Math.max(0, helper(tree.right, max));
    max.m = Math.max(max.m, l + r + tree.value);
    return Math.max(l, r) + tree.value;
  }

const tree = new BST(1);
tree.left = new BST(2);
tree.right = new BST(3);


tree.left.left = new BST(4);
 tree.left.right = new BST(5);

// tree.right.right = new BST(6);

// tree.right.right.left = new BST(7);
// tree.right.right.right = new BST(8);

console.log(maxPathSum(tree));