class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



function symmetricalTree(tree) {
    let arr = {res: true};
    check(tree.left, tree.right, arr);
    return arr.res;
}

function check(nodel, noder, arr) {

    if (nodel === null && noder === null) {
        return;
    }
    if((nodel === null || noder === null || nodel.value !== noder.value) && !!arr['res']){
        arr['res']=false;
        return;
    }

    check(nodel ? nodel.left : null, noder ? noder.right : null, arr);
    check(nodel ? nodel.right : null, noder ? noder.left : null, arr);
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(2);

root.left.left = new BinaryTree(3);
root.left.right = new BinaryTree(3);

//root.right.left = new BinaryTree(4);
//root.right.right = new BinaryTree(5);


console.log(symmetricalTree(root));



// {"id": "1", "left": "2", "right": "2-2", "value": 1},
// {"id": "2", "left": "3", "right": "3-2", "value": 2},
// {"id": "2-2", "left": null, "right": null, "value": 2},
// {"id": "3", "left": null, "right": null, "value": 3},
// {"id": "3-2", "left": null, "right": null, "value": 3}

 
    