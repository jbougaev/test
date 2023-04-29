function zigzagTraverse(array) {
    let width = array[0].length;
    let height = array.length;
let counter = 0;
    let res = [];
    for (let j = 0; j < height + width - 1; j++) {
        if(j%2){

        }


        for (let i = 0; i <= j; i++) {
            let x = i;
            let y = j - i;

            if (j % 2 === 0) {
                x = j - i;
                y = i;
              
             
            } else {
                x = i;
                y = j - i;
 
            }
               if (y<height && x<width) {
                    res.push(array[y][x]);
                }

                counter +=1;
        }
    }
console.log(counter);
    return res;
}
console.log(zigzagTraverse([
    [1, 2, 3],
    [4, 5, 6],

]));

console.log(zigzagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
]));