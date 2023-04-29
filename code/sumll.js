// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let firstL = getLength(linkedListOne);
    let secondL = getLength(linkedListTwo);
    let longest = firstL > secondL ? linkedListOne : linkedListTwo;
    let shortest = firstL > secondL ? linkedListTwo : linkedListOne;
    let sum = linkedListOne.value + getSecondValue(linkedListTwo);
    let carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    let result = new LinkedList(sum >= 10 ? sum % 10 : sum);
    longest = longest.next;
    shortest = shortest === null ? null : shortest.next;
    while (longest != null) {
        sum = longest.value + getSecondValue(shortest) + carry;
        carry = sum >= 10 ? Math.floor(sum / 10) : 0;      
        addToList(result, sum >= 10 ? sum % 10 : sum);
        longest = longest.next;
        shortest = shortest === null ? null : shortest.next;
    }

    if(carry !== 0){
        addToList(result, carry);
    }
    return result;
}
function addToList(list, node) {
    let temp = list;
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = new LinkedList(node);
}
function getSecondValue(list) {
    return list === null ? 0 : list.value;
}
function getLength(list) {
    let counter = 1;
    while (list.next != null) {
        counter += 1;
        list = list.next;
    }
    return counter;
}

let a1 = new LinkedList(0);
addToList(a1, 0);
addToList(a1, 0);
 addToList(a1, 5);

let a2 = new LinkedList(9);
// addToList(a2, 4);
// addToList(a2, 5);

console.log(sumOfLinkedLists(a1, a2));