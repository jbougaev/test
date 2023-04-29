function missingNumbers(nums) {
    if(nums.length === 0){
        return [1,2];
    }
    let n = nums.length;
    let sorted = nums.sort((a, b) => a - b);
    let result = [];
    let sum = (1 + n + 2) * (n + 2) / 2;
    let sum1 = sorted.reduce((pr, c, i) => pr = pr + c, 0);
    let diff = sum - sum1;
    let d = Math.floor(diff / 2);
    const a1 = sorted.filter(a => a <= d);
    const a2 = sorted.filter(a => a > d);

    let suma1 = (1 + d) * (a1.length + 1) / 2;
    let sum1a1 = a1.reduce((pr, c, i) => pr = pr + c, 0);
    let diffa1 = suma1 - sum1a1;
    result.push(diffa1);
    
    if(a2.length === 0){
        result.push(n+2);
    }else{
        let suma2 = (d+1 + n + 2) * (a2.length + 1) / 2;
        let sum1a2 = a2.reduce((pr, c, i) => pr = pr + c, 0);
        let diffa2 = suma2 - sum1a2;
        result.push(diffa2);
    }



    return result;

}

console.log(missingNumbers([3]));