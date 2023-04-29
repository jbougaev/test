// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



function splitBinaryTree(tree) {
    let sum = calcSum(tree);
    if (sum % 2 === 1) {
        return 0;
    }
    let sums = [];
    let res = post(tree, sums);
    return res.filter(a => a.indexOF(sum/2)).length > 0 ? sum/2 : 0;
}

function post(tree, sum) {
    if (!tree) {
        return 0;
    }
    let l = post(tree.left, sum);
    let r = post(tree.right, sum);
    let s = tree.value + l + r;
    sum.push(s);
    return s;

}

function calcSum(tree) {
    let sum = 0;
    const stack = [];
    stack.push(tree);

    while (stack.length > 0) {
        let f = stack.shift();
        sum = sum + f.value;
        if (f.left !== null) {
            stack.push(f.left);
        }
        if (f.right !== null) {
            stack.push(f.right);
        }
    }

    return sum;
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(4);
// tree.left.right = new BinaryTree(-5);
// tree.left.left.left = new BinaryTree(2);



tree.right = new BinaryTree(3);
// tree.right.left = new BinaryTree(5);
// tree.right.right = new BinaryTree(2);



console.log(splitBinaryTree(tree));