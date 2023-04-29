function powerset(array) {
    return help(array);
}



function help(ar) {
    if (ar.length === 0) {
        let res = [];
        res.push([]);
        return res;
    }

    let res = help(ar.slice(0, ar.length - 1));

    let l = res.length;
    for (let i = 0; i < l; i++) {
        res.push(res[i].concat(ar.slice(ar.length - 1)));
    }

    return res;
}


// function powerset(array) {
//     let res = [];
//     help(array, res);
//     return res.length;
// }



// function help(ar, res) {
//     if (ar.length === 0 && res.length === 0) {
//         res.push([]);
//         return;

//     }

//     help(ar.slice(0, ar.length - 1), res);

//     let l = res.length;
//     for (let i = 0; i < l; i++) {
//         res.push(res[i].concat(ar.slice(ar.length - 1)));
//     }

//     return res;


// }


console.log(powerset([1, 2, 3, 4]));