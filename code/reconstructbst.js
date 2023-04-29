// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function reconstructBst(p) {
  return helper(p);
  }

  function helper(p){

    if(p.length == 0){
        return;
    }

    let value = p[0];

    let right = p.length;  

    for(let i=0; i< p.length; i++){
        if(p[i]>value){
            right = i;
            break;
        }
    }

    let leftN = helper(p.slice(1, right));
    let rightN  = helper( p.slice(right));
    return new BST(value, leftN, rightN);
    
  }

  console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]));
  