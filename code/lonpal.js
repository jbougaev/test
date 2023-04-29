function longestPalindromicSubstring(string) {
    let start = 0;
    let end = 0;
    let counter = 0;
    let maxCounter = 0;
    let p = "";
    for (let i = 1; i < string.length - 1; i++) {
        start = i - 1;
        end = i + 1;
        counter = 1;
        while (string[start] !== undefined && string[end] !== undefined &&
            string[start] === string[end]) {
            counter += 2;
            if (counter > maxCounter) {
                maxCounter = counter;
                p = string.substr(start, end - start + 1);
            }
            start = start - 1;
            end = end + 1;
        }
    }

    for (let i = 0; i < string.length-1; i++) {
        start = i;
        end = i + 1;
        counter = 0;
        while (string[start] !== undefined && string[end] !== undefined &&
            string[start] === string[end]) {
            counter += 2;
            if (counter > maxCounter) {
                maxCounter = counter;
                p = string.substr(start, end - start + 1);
            }
            start = start - 1;
            end = end + 1;
        }
    }

    return p;
}



console.log(longestPalindromicSubstring("abaxyzzyxf"));