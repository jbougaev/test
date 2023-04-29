function minRewards(scores) {
    let res = new Array(scores.length).fill(-1);
    let up;
    let counter = 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < scores[i + 1]) {
            counter = !up ? 1 : counter + 1;
            if (counter === 1) {
                sum += fillUp(i, res);
            }
            up = true;
            res[i] = counter;
            sum += res[i];
        } else {
            if (up) {
                res[i] = i === scores.length - 1 ? res[i - 1] + 1 : '$';
                sum += res[i] === '$' ? 0 : res[i];
            } else if (i === scores.length - 1) {
                res[i] = 1;
                sum += res[i];
            }
            up = false;
        }
    }

    if (!up) {
        sum += fillUp(scores.length - 1, res);
    }
    return sum;
}

function fillUp(i, res) {
    let j = 1;
    let sum=0;
    while ((res[i - j] === -1 || res[i - j] === '$') && i - j > -1) {
        if (res[i - j] === '$') {
            let after = res[i - j + 1];
            let before = res[i - j - 1];
            if (after !== undefined && before !== undefined) {
                res[i - j] = after > before ? after + 1 : before + 1;
                sum += res[i - j];
            }
        } else {
            res[i - j] = j + 1;
            sum += res[i - j];
        }
        j++;
    }
   return sum;
}
//console.log(minRewards([50, 65, 53, 5, 4, 3]));

console.log(minRewards([800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]));//9  1 3 2 1 2   0 2 1 0 1
                    //
                    //   5  +  4   + 3  +  2   +  3  +  4 +  5   +  6  +  5  +  6   + 7  +  6   + 5   + 4    + 3 +   2  + 1 + 0  + 1   +2   + 3  + 4  +   3   +  4   + 3  + 4   +  3  +  4   + 3   +  4  + 3   + 4  +   0