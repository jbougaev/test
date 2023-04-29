class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
     breadthFirstSearch(array) {
           let stack = [this];
          let array = [];
          while (stack.length > 0) {
              let el = stack.shift();
              stack = stack.concat(el.children);
              array.push(el.name);
          }
  
          return array;
     }
  
  }

let n = new Node('A');
n.addChild('B');
n.addChild('C');
n.addChild('D');

console.log(n.breadthFirstSearch([]));