function minimumCharactersForWords(w) {
    const ob = {};

    for (let i = 0; i < w.length; i++) {
        const curO = {};
        w[i].split('').map((a, index) => {
            if (!curO[a]) {
                curO[a] = [a];
            } else {
                curO[a].push(a);
            }
        });

        Object.keys(curO).map(a => {
            if (!ob[a]) {
                ob[a] = curO[a];
            } else {
                const gap = curO[a].length - ob[a].length;
                if (gap > 0) {
                    for (let j = 0; j < gap; j++) {
                        ob[a].push(a);
                    }
                }
            }
        });
    }

    return Object.values(ob).flat();
}

console.log(minimumCharactersForWords(["abc", "bavcc", "aaaa", "cde", "efg", "gead"]));