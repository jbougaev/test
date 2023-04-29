function largestRange(array) {
    const obj = {};
    let smallest;
    let smallestI;
    let largest;
    let largestI;
    let length = 0;
    let largestL = 0;
    for (let a = 0; a < array.length; a++) {
        obj[array[a]] = false;
    }

    for (let a = 0; a < array.length; a++) {
        length = 0;
        let n = array[a];

        while (n in obj) {
            largest = n;
            length++;
            n = n + 1;
        }
        n = array[a];
        while (n in obj) {
            smallest = n;
            length++;
            n = n - 1;
        }

        if (length > largestL) {
            largestL = length;
            smallestI = smallest;
            largestI = largest;
        }

    }

    return [smallestI, largestI];
}

console.log(largestRange([4, 2, 1, 3, 6]));