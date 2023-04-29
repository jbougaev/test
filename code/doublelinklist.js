class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            return;

        }
        if (this.containsNode(node)) {
            let prev = node.prev;
            let next = node.next;
            if (prev !== null) {
                prev.next = next;
            }
            if (next !== null) {
                next.prev = prev;
            }
            node.prev = null;
            if (this.head !== null) {
                node.next = this.head;
                this.head.prev = node;
            }


            this.head = node;
        } else {
            if (this.head !== null) {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;

            } else {
                this.head = node;
            }

        }
    }

    setTail(node) {
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        if (this.containsNode(node)) {
            let prev = node.prev;
            let next = node.next;
            if (prev !== null) {
                prev.next = next;
            }
            if (next !== null) {
                next.prev = prev;
            }

            node.next = null;
            if (this.tail !== null) {
                node.prev = this.tail;
                this.tail.prev = node;
            }



            this.tail = node;
        } else {
            if (this.tail !== null) {
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;

            } else {
                this.tail = node;
            }
        }
    }

    insertBefore(node, nodeToInsert) {
        if(!containsNode(node)){
            return;
        }

        if(node === nodeToInsert){
            return;
        }

        if(node.prev === nodeToInsert){
            return;
        }

        let prev = node.prev;

        if(prev === null){

          if()


           node.prev = nodeToInsert;
           nodeToInsert.next = node;
           nodeToInsert.prev = null;
           this.head = node;
        }

        if(nodeToInsert === this.head){

        }
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
    }

    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
    }

    removeNodesWithValue(value) {
        // Write your code here.
    }

    remove(node) {
        if (this.containsNode(node)) {
            let prev = node.prev;
            let next = node.next;

            if (prev === null) {
                this.setHead(node.next);
            }

            if (next === null) {
                this.setTail(node.prev);
            }

            if (node.prev !== null && node.next !== null) {
                node.prev.next = next;
                node.next.prev = prev;
            }

        }
    }

    containsNodeWithValue(value) {
        // Write your code here.
    }

    containsNode(node) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === node.value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }
}

let ddl = new DoublyLinkedList();

let node1 = new Node(1);
let node2 = new Node(2);
let node31 = new Node(3);
let node32 = new Node(3);
let node33 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

ddl.setHead(node5);

console.log(ddl);

ddl.setHead(node4);

console.log(ddl);

ddl.setHead(node31);

console.log(ddl);

ddl.setHead(node2);

console.log(ddl);

ddl.setHead(node1);

console.log(ddl);

ddl.setHead(node4);

console.log(ddl);

ddl.setTail(node6);

console.log(ddl);




