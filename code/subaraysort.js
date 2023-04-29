function subarraySort(array) {
    let smalest;
    let smalestI;
    let largest;
    let largestI;

    for (let a = 0; a < array.length - 1; a++) {

        if (array[a] <= array[a + 1]) {

        } else {
            if (array[a + 1] < smalest || !smalest) {
                smalest = array[a + 1];
            }
            if (array[a] > largest || !largest) {
                largest = array[a];
            }
        }
    }
    for (let a = 0; a < array.length; a++) {
        if (array[a] > smalest) {
            if (!smalestI) {
                smalestI = a;
            }
        }
    }

    for (let a = array.length - 1; a > -1; a--) {
        if (array[a] < largest) {
            if (!largestI) {
                largestI = a;
            }
        }
    }

    return [smalestI, largestI];

}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));