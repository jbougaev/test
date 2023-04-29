// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function mergeBinaryTrees(tree1, tree2) {
    helper(tree1, tree2, tree1);
    return tree1;
}

function helper(t1, t2, parent = null, l = '') {
    if (!t1 && !t2) {
        return;
    }

    // if (!parent) {
    //     if (l === 'l') {
    //         parent.left = t2;
    //     } else if (l === 'r') {
    //         parent.right = t2;
    //     }
    // } else {
        if (t1 && !t2) {

        } else if (!t1 && t2) {

            if (l === 'l') {
                parent.left = t2;
            } else if (l === 'r') {
                parent.right = t2;
            }
            t1 = t2;
            return;
        } else {
            t1.value = t1.value + t2.value;
        }
    //}



    helper(t1 && t1.left, t2 && t2.left, t1, 'l');
    helper(t1 && t1.right, t2 && t2.right, t1, 'r');
}



let tree1 = new BinaryTree(10);

//tree1.left = new BinaryTree(7);
//tree.left.left = new BinaryTree(3);
//tree.left.right = new BinaryTree(5);

// tree.left.right.left = new BinaryTree(1);
// tree.left.right.right = new BinaryTree(2);

// tree.left.right.right.left = new BinaryTree(-1);
// tree.left.right.right.right = new BinaryTree(0);

//tree1.right = new BinaryTree(15);
// tree.right.left = new BinaryTree(12);
// tree.right.right = new BinaryTree(40);

let tree2 = new BinaryTree(2);

tree2.left = new BinaryTree(3);
tree2.left.right = new BinaryTree(4);
tree2.right = new BinaryTree(6);
tree2.right.right = new BinaryTree(7);

// tree.left.right.left = new BinaryTree(1);
// tree.left.right.right = new BinaryTree(2);

// // tree.left.right.right.left = new BinaryTree(-1);
// // tree.left.right.right.right = new BinaryTree(0);

// tree.right = new BinaryTree(15);
// tree.right.left = new BinaryTree(12);
// tree.right.right = new BinaryTree(40);

console.log(tree2);
console.log(mergeBinaryTrees(tree1, tree2));
