function spiralTraverse(array) {
    if (array.length === 0) {
         return [];
     }
     let result = [];
     let width = array[0].length;
     let height = array.length;
     let currentRow = 0;
     let currentColumn = 0;
 
     while (width > 1 && height > 1) {
         for (let j = currentColumn; j < width; j++) {
             result.push(array[currentRow][j]);
 
         }
 
         for (let j = currentRow+1; j < height; j++) {
             result.push(array[j][width - 1]);
 
         }
 
         for (let j = width - 2; j > currentColumn-1; j--) {
            if(currentColumn === height -1){
                break;
            }
             result.push(array[height - 1][j]);
 
         }
 
         for (let j = height - 2; j > currentRow; j--) {
            if(currentRow === width -1){
                break;
            }
             result.push(array[j][currentColumn]);
 
         }
 
         currentRow += 1;
         currentColumn += 1;
 
         width -= 1;
         height -= 1;
     }
 
 
 
 
     return result;
 }
 
console.log(spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
  ]));