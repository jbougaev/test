function minHeightBst(array) {
   let bst;
    
   return  helper(array, bst);
  }
  
  function helper(ar, bst){
    if(ar.length ===0){
      return;
    }
    let rootIndex = Math.floor(ar.length /2);
    
    if(!bst){
        bst = new BST(ar[rootIndex]);
    }else{
        bst.insert(ar[rootIndex]);
    }  

    let leftArray = ar.slice(0, rootIndex);
    let rightArray = ar.slice(rootIndex + 1);
    helper(leftArray, bst);
    helper(rightArray, bst);
  
    return bst;
   
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }

  console.log(minHeightBst([1, 2, 5, 7]));