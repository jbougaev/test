function moveElementToEnd(array, toMove) {
  let counter = 0;
 for(let i =0; i < array.length; i++){
   if(array[i-counter] === toMove){
     let moved = array.shift();
     counter = counter +1;
     array.push(moved);
   }
 }

  return array;
}

   console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));