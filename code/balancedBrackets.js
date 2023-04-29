function balancedBrackets(string) {
    const stack  = [];
    for(let i =0; i< string.length; i++){
      if(string[i] === '(' || string[i] === '[' || string[i] === '{'){
        stack.push(string[i]);
      }else  if(string[i] === ')' || string[i] === ']' || string[i] === '}'){
        if(stack.length === 0){
          return false;
        }
        const pop = stack[stack.length - 1];
        if((pop === '(' && string[i] === ')') ||
          (pop === '[' && string[i] === ']') ||
          (pop === '{' && string[i] === '}')
          ){
            stack.pop();
          }else{
          return false;
          }
      }
    }
    return stack.length === 0;
  }

  console.log(balancedBrackets("()[]{}{"));