function nextGreaterElement(array) {
    const stack = [];
    const result = new Array(array.length).fill(-1);
    for (let i = 0; i < (array.length) * 2; i++) {
        let j = i % array.length;

       
            while (stack.length > 0 && array[stack[stack.length - 1]] < array[j]) {
               
                const el = stack.pop();
                result[el] = array[j];
            
        }
        stack.push(j);
    }
    return result;
}

console.log(nextGreaterElement([2, 5, -3, -4, 6, 7, 2]));