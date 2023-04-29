function groupAnagrams(w) {
    let ar;
    let ob = {};
    for (let i = 0; i < w.length; i++) {
        ar = w[i].split('').map((a, index) => w[i].charCodeAt(index))
            .sort((a, b) => a - b);

            if(!ob[ar]){
                ob[ar] = [w[i]];
            }else{
                ob[ar].push(w[i]);
            }
    }

    return Object.values(ob);
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]));