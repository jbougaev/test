
function oneEdit(stringOne, stringTwo) {
    if (stringOne === null || stringOne === undefined ||
        stringTwo === null || stringTwo === undefined) {
        return false;
    }
    if (Math.abs(stringOne.length - stringTwo.length) > 1) {
        return false;
    } else {
        const equal = stringOne.length === stringTwo.length;
        const longer = stringOne.length > stringTwo.length ? stringOne : stringTwo;
        const shorter = stringOne.length > stringTwo.length ? stringTwo : stringOne;
        let editCounted = 0;
        let j = 0;
        for (let i = 0; i < longer.length; i++) {
            j= editCounted===0 ? i : (equal ? i : i - 1);
            if (longer[i] !== shorter[j]) {
                editCounted += 1;
                if (editCounted > 1) {
                    return false;
                }
            }

        }
        return true;
    }

}


console.log(oneEdit("ab", "bb"));
