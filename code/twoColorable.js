function twoColorable(edges) {
    let stack = [];
    const colors = new Array(edges.length);
   for(let i=0; i< edges.length; i++){
     if(colors[i] === undefined){
        colors[i] = true;
       
     }
     stack =  stack.concat(edges[i]);
     while(stack.length > 0){
      const el = stack.pop();
       if(colors[el] === undefined){
         colors[el] = !colors[i];
       }else{
         if(colors[el] === colors[i]){
           return false;
         }
       }
     }
    
     
   }
    return true;
  }

  console.log(twoColorable([
    [1, 2],
    [0, 2],
    [0, 1]
  ]));