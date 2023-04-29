
function bestDigits(number, numDigits) {
    let stack = [number[0]];
    let g = 0;
    for (let i = 1; i < number.length; i++) {
        if (Number(stack[stack.length - 1]) > Number(number[i])) {       
            stack.push(number[i]);
        } else {
            while (Number(stack[stack.length - 1]) < Number(number[i]) && g < numDigits) {
                stack.pop();
                g = g + 1;
            }
            stack.push(number[i]);
        }
        }
        let res = stack.join("");
    return res.substring(0, res.length  - (numDigits - g));

}

console.log(bestDigits("321", 2));//98763
//console.log(bestDigits("462839", 2));