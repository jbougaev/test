function staircaseTraversal(height, maxSteps) {
    const cache = {};
    
    function countHelper(stairsLeft) {
      if (stairsLeft === 0) {
        return 1;
      }
      
      if (stairsLeft < 0) {
        return 0;
      }
      
      if (cache[stairsLeft]) {
        return cache[stairsLeft];
      }
      
      let count = 0;
      for (let i = 1; i <= maxSteps; i++) {
        count += countHelper(stairsLeft - i);
      }
      
      cache[stairsLeft] = count;
      return count;
    }
    
    return countHelper(height);
    
  }

  console.log(staircaseTraversal(4,1));


  ///  h m 0,1; 1,1; 2 (2, 1), 3 (2, 2)


  