class UnionFind {
    constructor() {
        this.sets = {};
    }

    createSet(value) {
        this.sets[value] = value;
    }

    find(value) {
        if (!(value in this.sets)) return null;
        let c = value;
        while (c !== this.sets[c]) {
            c = this.sets[c];
        }

        return c;
    }

    union(valueOne, valueTwo) {
        if (!(valueOne in this.sets) || !(valueTwo in this.sets)) return;
        const v1r = this.find(valueOne);
        const v2r = this.find(valueTwo);
        this.sets[v2r] = v1r;
    }
}

function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    const uf = new UnionFind();
    for (let i = 0; i < 26; i++) {
        uf.createSet(i);
    }
    let root;
    for (let j = 0; j < s1.length; j++) {
        for (let i = 0; i < 26; i++) {
            if (i === s1.charCodeAt(j) - 'a'.charCodeAt(0)) {
                if(root === undefined){
                    root = j;
                }
                uf.union(root, i);
            }
        }
    }

    for (let i = 0; i < s1.length; i++) {
        let v1 = uf.find(s1.charCodeAt(i) - 'a'.charCodeAt(0));
        let v2 = uf.find(s2.charCodeAt(i) - 'a'.charCodeAt(0));

        if (v1 !== v2) {
            return false;
        }
    }
    return true;
}

// Тестирование функции areAnagrams
const str1 = "ar";
const str2 = "ba";
console.log(`${str1} и ${str2} являются анаграммами: ${areAnagrams(str1, str2)}`);

const str3 = "triangle";
const str4 = "integral";
console.log(`${str3} и ${str4} являются анаграммами: ${areAnagrams(str3, str4)}`);
