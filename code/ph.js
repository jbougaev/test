function phoneNumberMnemonics(phoneNumber) {
    const hash = getHash();
    const pn = phoneNumber.toString().split('');
    let res = [];

    const f = hash[pn[0]].split('');

    for (let i = 0; i < f.length; i++) {
        res.push([f[i]]);
    }

    for (let i = 1; i < pn.length; i++) {
        helper(hash[pn[i]]);

    }

    return res.map(r=>r.join(''));

    function helper(str) {
        let numberOfLetters = str.length;
        let letters = str.split('');
        let resL = res.length;
        let newRes = [];
        for (let i = 0; i < resL; i++) {
            for (let j = 0; j < numberOfLetters; j++) {
                newRes.push([...res[i]]);

            }
        }
        for (let i = 0; i < newRes.length; i++) {

            newRes[i].push(letters[i % numberOfLetters]);
        }

        res = [...newRes];

    }
}


function getHash() {
    return {
        "1": "1",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
        "0": "0"
    };
}

console.log(phoneNumberMnemonics(97));