// function bestSeat(seats) {
//     let started = false;
//     let longest = 0;
//     let current = 0;
//     let startIndexC = -1;
//      let startIndexL = -1;
    
//    for(let i=0; i< seats.length; i++){
//      if(seats[i] === 0){
//        if(!started){
//            started = true;
//            startIndexC = i;
//        }
//        current+=1;
//      }
  
//      if(started && seats[i] === 1){
//         started = false;
//        if(current > longest){
//          longest = current;
//          startIndexL = startIndexC;
//          startIndexC = -1;
//          current = 0;
//        }
//      }
  
  
     
     
//    }
  

//     if(longest === 0){
//       return -1;
//     }
//     return startIndexL;// + Math.floor(longest/2);
//   }

function bestSeat(seats) {
    let started = false;
    let longest = 0;
    let current = 0;
    let startIndexC = -1;
     let startIndexL = -1;
    
   for(let i=seats.length -1; i>-1; i--){
     if(seats[i] === 0){
       if(!started){
           started = true;
         startIndexC = i;
       }
       current+=1;
     }
  
     if(started && seats[i] === 1){
        started = false;
       if(current > longest){
         longest = current;
         startIndexL = startIndexC;
         startIndexC = -1;
         current = 0;
       }
     }   
   }
  
    if(longest === 0){
      return -1;
    }
  
    if(longest % 2 === 0){
       return  startIndexL - Math.floor(longest/2) +1;
    }
    return startIndexL - Math.floor(longest/2);
  }
  console.log(bestSeat(  [1, 0, 0, 1, 0, 0, 1]));