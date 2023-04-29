function numberOfWaysToTraverseGraph(width, height) {
    let result = [];

  for(let i=0; i< width; i++){
    let a = [];
    for(let j=0; j< height; j++){
       
        if(i === 0){
            a[j]=1;
        }else{
            if(j===0){
                a[j]=1;
            }else{
                a[j] =a[j-1] + result[i-1][j];
            }
        }
    }
    result.push(a);
  }

  return result[width-1][height-1];
}



console.log(numberOfWaysToTraverseGraph(2, 3));