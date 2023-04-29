// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let firstL = getLength(linkedListOne);
    let secondL = getLength(linkedListTwo);
    let longest = firstL > secondL ? linkedListOne : linkedListTwo;
    let shortest = firstL > secondL ? linkedListTwo : linkedListOne;
    if (firstL !== secondL) {
        let counter = 0;
        while (counter < Math.abs(firstL - secondL)) {
            longest = longest.next;
            counter += 1;
        }
    }

    let result = null;
    let started = false;
    while (longest !== null && shortest !== null) {
        if (longest.value === shortest.value) {
            if (!started) {
                result = new LinkedList(longest.value);
                started = true;
            } else {
                addToList(result, longest.value);
            }
        } else {
            if (started) {
                result = null;
                break;
            }
        }

        longest = longest.next;
        shortest = shortest === null ? null : shortest.next;
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
function getLength(list) {
    let counter = 1;
    while (list.next != null) {
        counter += 1;
        list = list.next;
    }
    return counter;
}

let a1 = new LinkedList(2);
addToList(a1, 3);
addToList(a1, 4);
addToList(a1, 1);

let a2 = new LinkedList(4);
addToList(a2, 1);
// addToList(a2, 4);
// addToList(a2, 5);

console.log(mergingLinkedLists(a1, a2));