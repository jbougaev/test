function commonCharacters(s) {
    // let res = [];
    // let n = s.length;
    // let map = new Map();
    // for (let i = 0; i < s.length; i++) {
    //     let set = new Set(s[i].split(""));

    //     for (let key of set)
    //         if (map.has(key)) {
    //             map.set(key, map.get(key) + 1);
    //         } else {
    //             map.set(key, 1);
    //         }
    // }


    // map.forEach((value, key) => {
    //     if (value === n) {
    //         res.push(key);
    //     }
    // });
    // return res;
    const t = [...new Set(s[0].split(""))];
    const r = t.filter(w=> s.slice(1).every(l=> l.includes(w)));
    return r;
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));