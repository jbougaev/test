// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getDiameter(tree);
  }
  
    function getDiameter(root) {
      let diameter = 0;
      
      function dfs(node) {
        if (!node) {
          return 0;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
      }
      
      let height = dfs(root);
      
      return diameter;
    }

  const tree = new BinaryTree(1);
  tree.left = new BinaryTree(3);
  tree.right = new BinaryTree(2);
  

//   tree.left.left = new BinaryTree(7);
//   tree.left.left.left = new BinaryTree(8);
//   tree.left.left.left.left = new BinaryTree(9);
//   tree.left.right = new BinaryTree(4);
//   tree.left.right.right= new BinaryTree(5);
//   tree.left.right.right.right = new BinaryTree(6);

  console.log(tree);

console.log(binaryTreeDiameter(tree));  