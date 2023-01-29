function threeNumberSum(array, t) {
    let sorted = array.sort((a,b) => a - b);
   let result = [];
     for(let i = 0; i< array.length; i++){
       let current = array[i];
       let left = i + 1;
        let right = array.length - 1;
       while(left<=right){
         if(current + left + right === t){
           result.push([current, left, right]);
           break;
           
         }else if(current + left + right < t){
           left  = left + 1;
           
         }else{
           right = right - 1;
         }
       }
     }
   
     return result;
     
   }

   console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));