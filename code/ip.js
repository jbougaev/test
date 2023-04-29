function validIPAddresses(string) {
    let result = [];
    if (string.length < 3) {
        return result;
    }
    for (let i = 1; i < 4; i++) {
        let ar10 = string.substr(0, i);
        let ar11 = string.substr(i);
        if (!isValid(ar10)) {
            continue;
        }

        for (let j = 1; j < 4; j++) {
            let ar20 = ar11.substr(0, j);
            let ar21 = ar11.substr(j);
            if (!isValid(ar20)) {
                continue;
            }
            for (let m = 1; m < 4; m++) {
                let ar30 = ar21.substr(0, m);
                let ar31 = ar21.substr(m);
                if (!isValid(ar30)) {
                    continue;
                }
                if (!isValid(ar31)) {
                    continue;
                }
                else {
                    if(ar31!==""){
                        result.push(ar10 + "." +
                        ar20 + "." +
                        ar30 + "." +
                        ar31);
                    }
                   
                }
            }
        }
    }
    return result;
}

function isValid(str) {
    if (!str || str.length === 0) {
        return false;
    }
    if(str.length > 1){
        if(str[0] === '0'){
            return false;
        }

    }
    let n = Number(str);

    return n <= 255 && n >= 0;
}

console.log(validIPAddresses("1921680"));