function reversePolishNotation(tokens) {
    let stack = [];
    let result = 0;
  
    const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') 
      && !isNaN(num);
  
    for(let i=0; i< tokens.length; i++){
      if(isNumeric(tokens[i])){
        stack.push(Number(tokens[i]));
      }else{
        let f = stack.pop();
        let s = stack.pop();
  
        switch(tokens[i]){
          case "+":
            result = f + s;
            break;
             case "-":
            result = s-f;
            break;
             case "*":
            result = f * s;
            break;
             case "/":
            result =  s/f < 0  ? Math.ceil(s/f ) : Math.floor(s/f);
            break;
        }
        stack.push(result);
        
      }
    }
    if(stack.length !== 0){
      result = stack.pop();
    }
    
    return result;
  }

  console.log(reversePolishNotation(["3", "2", "+", "7", "*"]));