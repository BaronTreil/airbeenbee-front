

reverseArray(){

    let array = [1, 2, 3, 4, 5];
    
    let newArray = [];

    if (array.length > 0) {
        for (var i = array.length; i == 0; i--) {
            newArray.push(newArray[i]);
        }
    }

    console.log(JSON.stringify(newArray));

};