function maxSumIncreasingSubsequence(array) {
    let res = [];
    let max = -Infinity;
    let maxI = -1;
    for (let i = 0; i < array.length; i++) {
        let sum = array[i];
        let p = -1;
        let m = -Infinity;
        for (let j = 0; j <= i; j++) {
            if (array[j] < array[i]) {
                if (Math.max(array[i] + res[j].s, array[i]) > m) {
                    m = Math.max(array[i] + res[j].s, array[i]);
                    sum = m;
                    if (i !== j) {
                        if(m === array[i]){
                            p=-1

                        }else{
                            p = j;
                        }
                      
                    }
                }
            }
        }
        if (max < sum) {
            max = sum;
            maxI = i;
        }
        res.push({ s: sum, p: p });
    }
    let re1 = [];
    let last = res[maxI];
    re1.unshift(array[maxI]);

    while (last) {
        if (last.p !== -1) {
            re1.unshift(array[last.p]);
        }
        last = last.p === -1 ? undefined : res[last.p];
    }
    return [max, re1];
}

console.log(maxSumIncreasingSubsequence([-1, 1]));