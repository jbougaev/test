function sameBsts(arrayOne, arrayTwo) {
  
    let result = false;
    let leftO = [];
    let rightO = [];
    let leftT = [];
    let rightT = [];

    if (arrayOne.length !== arrayTwo.length ||
        arrayOne[0] !== arrayTwo[0]) {
        return false;
    }

    if(arrayOne.length === 0 && arrayTwo.length ===0){
        return true;
    }

    for(let i=1; i< arrayOne.length; i++){
        if(arrayOne[i] < arrayOne[0]){
            leftO.push(arrayOne[i]);
        }else{
            rightO.push(arrayOne[i]);
        }

        if(arrayTwo[i] < arrayTwo[0]){
            leftT.push(arrayTwo[i]);
        }else{
            rightT.push(arrayTwo[i]);
        }
    }

   

    return sameBsts(leftO, leftT) && sameBsts(rightO, rightT);
}



console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]));