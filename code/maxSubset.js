function maxSubsetSumNoAdjacent(array) {
    return helper(array,0, array.length, []);
  }
  
  function helper(ar, i, length, arN){
    if(i === length){
        return arN;
    }
    if(i === 0){
        arN[i] = ar[0];        
    }else if(i===1){
        arN[i] = Math.max(ar[0], ar[1]);
    }else{
        arN[i] = Math.max(arN[i-1], arN[i-2]+ ar[i]);
    }   

    return helper(ar, i + 1, length, arN);
  }


  console.log(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]));
  