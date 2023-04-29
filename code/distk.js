// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNodesDistanceK(tree, target, k) {  
    let r = {};
    df(tree, null, target, r);
    let res = bf(k, r.r);
    return res;
}

function bf(limit, root) {
    let stack = [];
    root.v = true;
    stack.push({ n: root, c: 0 });
  
    let res = [];
    while (stack.length > 0) {
        let nodeO = stack.shift();
        let c = nodeO.c;
        if (c > limit) {
            break;
        }
        let node = nodeO.n;

        if (!!node.value && c === limit && node.value !== root.value) {
            res.push(node.value);
        }
        if (node.left && !node.left.v) {
            node.left.v = true;
            stack.push({ n: node.left, c: c + 1 });
        }
        if (node.right  && !node.right.v) {
            node.right.v = true;
            stack.push({ n: node.right, c: c + 1 });
        }
        if (node.parent  && !node.parent.v) {
            node.parent.v = true;
            stack.push({ n: node.parent, c: c + 1 });
        }
    }
    return res;
}

function df(tree, parent, k, res) {
    if (!tree) {
        return;
    }
    if (tree.value === k) {
        res.r = tree;
    }
    tree.parent = parent;
    df(tree.left, tree, k, res);
    df(tree.right, tree, k, res);
}

const tree = new BST(1);
tree.left = new BST(2);
tree.right = new BST(3);


tree.left.left = new BST(4);
tree.left.right = new BST(5);

tree.right.right = new BST(6);

tree.right.right.left = new BST(7);
tree.right.right.right = new BST(8);






console.log(findNodesDistanceK(tree, 3, 2));

