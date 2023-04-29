function searchInSortedMatrix(m, t) {
    const width = m[0].length-1;
    const height = m.length;
    let currentColumn = width-1;
    let currentRow = 0;
    
    let firstNumber = m[0][width];
  
    // if(firstNumber === t){
    //   return [width, 0];
    // }
  
    for(let i = width ; i > -1; i--){
      if(m[currentRow][i] === t){
        return [currentRow, i];
        
      }else if(m[currentRow][i] < t){
        currentRow +=1;
        i +=1;
        
      }else{
        
      }
      currentColumn = i;
    }
  
    return [-1, -1 ];
  }

  console.log(searchInSortedMatrix([
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ], 1000));