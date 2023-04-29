function kadane(arr) {
    if(arr.length === 0 ){
        return 0;
    }
    let max_so_far = arr[0];
    let max_ending_here = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      max_ending_here = Math.max( arr[i], max_ending_here + arr[i]);
      max_so_far = Math.max(max_so_far, max_ending_here);
      console.log(max_ending_here);
    }
  
    return max_so_far;
  }

  console.log(kadane([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));

  console.log(kadane([3,-20,4, 5]));