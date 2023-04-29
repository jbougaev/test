// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  

  
  function middleNode(linkedList) {
    let fast = linkedList;
    let slow=linkedList;
    while(fast!=null && fast.next !=null){
        slow = fast.next;
      fast = fast.next.next;
     
      
    }
    return slow;
  }

  let l = new  LinkedList(1);
  l.next = new  LinkedList(2);
  l.next.next =  new  LinkedList(3);
  l.next.next.next =  new  LinkedList(4);
  //l.next.next.next.next=  new  LinkedList(5);
 // l.next.next.next.next.next =  new  LinkedList(6);
  //l.next.next.next.next.next.next =  new  LinkedList(7);
 // l.next.next.next.next.next.next.next =  new  LinkedList(8);
 // l.next.next.next.next.next.next.next.next =  new  LinkedList(9);



console.log(middleNode(l));