class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    let s1 = nodeOne;
    let s2 = nodeThree;
    let result = false;
    let isFirst;

    while (s1 || s2) {
        if (s1 && s1.value === nodeTwo.value) {
            isFirst = 1;
            result = true;
            break;
        }
        if (s2 && s2.value === nodeTwo.value) {
            isFirst = 3;
            result = true;
            break;
        }
        if (!s1 && !s2) {
            result = false;
            break;
        }
        if (!!s1 && !!s2 && s1.value === s2.value) {
            result = false;
            break;
        }

        if (!!s1) {
            s1 = s1.value < nodeTwo.value ? s1.right : s1.left;
        }
        if (!!s2) {
            s2 = s2.value < nodeTwo.value ? s2.right : s2.left;
        }
    }

    if (result) {

        result = isFirst === 1 ? search(nodeTwo, nodeThree) : search(nodeTwo, nodeOne);

    }
    return result;
}

function search(root, n2) {
    while (root) {
        if (root.value === n2.value) {
            return true;
        }
        root = root.value < n2.value ? root.right : root.left;
    }
    return false;
}

// const tree = new BST(5);
// tree.left = new BST(2);
// tree.right = new BST(7);


// tree.left.left = new BST(1);
// tree.left.right = new BST(4);
// tree.left.right.left = new BST(3);

// tree.right.left = new BST(6);
// tree.right.right = new BST(8);

// tree.left.left.left = new BST(0);

const tree = new BST(2);
tree.left = new BST(1);
tree.right = new BST(3);
tree.right.right = new BST(4);




console.log(validateThreeNodes(tree.left, tree.right, tree));





