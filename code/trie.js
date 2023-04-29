class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            let node = this.root;
            for (let j = i; j < string.length; j++) {
                let letter = string[j];
                if (!(letter in node)) {
                    node[letter] = {};
                }
                node = node[letter];
            }
            node[this.endSymbol] = true;
        }
    }

    contains(string) {
        let found = true;
        let node = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!(string[i] in node)) {
                found = false;
                break;
            }
            node = node[string[i]];
        }
        return found;
    }
}

let a = new SuffixTrie('babc');
console.log(a);
console.log(a.contains('abc'));

