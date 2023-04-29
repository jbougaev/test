class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    
    // helper function to find the minimum value in a subtree
    findMin(node) {
      while(node.left) {
        node = node.left;
      }
      return node;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
          // the tree is empty, so set the new node as the root
          this.root = node;
        } else {
          // traverse the tree to find the correct position to insert the new node
          let current = this.root;
          while (true) {
            if (value < current.value) {
              if (current.left === null) {
                current.left = node;
                break;
              } else {
                current = current.left;
              }
            } else if (value > current.value) {
              if (current.right === null) {
                current.right = node;
                break;
              } else {
                current = current.right;
              }
            } else {
              // value already exists in the tree, so ignore
              break;
            }
          }
        }
      }
    
    // helper function to recursively delete a node from the tree
    deleteNode(node, value) {
      if (node === null) {
        return null;
      } else if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        // node to be deleted found
        if (node.left === null && node.right === null) {
          // case 1: node is a leaf node
          node = null;
        } else if (node.left === null) {
          // case 2a: node has only one child (right)
          node = node.right;
        } else if (node.right === null) {
          // case 2b: node has only one child (left)
          node = node.left;
        } else {
          // case 3: node has two children
          const temp = this.findMin(node.right);
          node.value = temp.value;
          node.right = this.deleteNode(node.right, temp.value);
        }
      }
      return node;
    }
    
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  }

  let tree = new BST();
  tree.insert(10);
  tree.insert(7);
  tree.insert(5);
  tree.insert(3);
  tree.insert(15);
  tree.insert(40);

  tree.delete(10);
  