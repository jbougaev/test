function minRewards(scores) {
    let res = new Array(scores.length).fill(-1);
    let up;
    let counter = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < scores[i + 1]) {            
            counter = !up ? 1 : counter + 1;
            up = true;      
            res[i] = counter;
        } else {
            if (i === 0) {
                res[i] = '$';
            }
            if (up) {
                res[i] = i === scores.length - 1 ? res[i - 1] + 1 : '$';
            } else if (i === scores.length - 1) {
                res[i] = 1;
            }
            up = false;
        }
    }
    let res1 = [...res];
    for (let i = scores.length - 1; i > -1; i--) {
        if (res[i] === '$') {
            let after = res1[i - 1];
            let before = res1[i + 1];
            if (after !== undefined && before !== undefined) {
                res1[i] = after > before ? res[i - 1] + 1 : before + 1;
            } else if (after === undefined) {
                res1[i] = scores[i] > before ? res1[i + 1] + 1 : 1;
            }
        } else if (res1[i] === -1) {
            res1[i] = res1[i + 1] + 1;
        }
    }

    return res1.reduce((ac, c) => ac + c, 0);
}

console.log(minRewards([800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]));//9  1 3 2 1 2   0 2 1 0 1
                    //
                    //   5  +  4   + 3  +  2   +  3  +  4 +  5   +  6  +  5  +  6   + 7  +  6   + 5   + 4    + 3 +   2  + 1 + 0  + 1   +2   + 3  + 4  +   3   +  4   + 3  + 4   +  3  +  4   + 3   +  4  + 3   + 4  +   0