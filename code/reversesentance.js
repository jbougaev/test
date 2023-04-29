function reverseWordsInString(str) {
    if (str.trim() === "") {
        return str;
    }
    let wordCounter = 0;
    let isWhiteSpace = undefined;
    const result = {};
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === " " && (isWhiteSpace === false || isWhiteSpace === undefined)) ||
            (str[i] !== " " && (isWhiteSpace === true || isWhiteSpace === undefined))) {
            isWhiteSpace = str[i] === " ";
            wordCounter += 1;
            result["w" + wordCounter] = str[i];
        } else {
            result["w" + wordCounter] += str[i];
        }
    }
    const res = Object.values(result);
    let resStr = "";
    for (let j = res.length - 1; j > -1; j--) {
        resStr += res[j];
    }
    return resStr;
}

console.log(reverseWordsInString("aaa bbb"));
