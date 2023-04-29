function fourNumberSum(array, targetSum) {
    let obj = {};
    let result = new Set();

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let nm = i + "," + j;
            obj[nm] = array[i] + array[j];
        }
    }
    for (const property in obj) {
        let value = targetSum - obj[property];
        let ar = new Set(property.split(',').map(e => array[Number(e)]));
        let ar1 = Object.keys(obj)
            .filter(key => obj[key] === value)       
            .map(k => {
                let a = k.split(',').map(e => array[Number(e)]);
                let ax = [...ar, ...a].sort((a, b) => a - b);
                let newSet = new Set(ax);
                if (newSet.size === 4) {
                    result.add(ax.toString());
                }
            });
        delete obj[property];
    }
    return Array.from(result).map(a => a.split(',').map(s => Number(s)));
}



console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));