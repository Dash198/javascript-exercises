const removeFromArray = function(arr, arg) {
    newArr=[];
    let allowed=1;
    for(let i=0;i<arr.length;i++){
        allowed=1;
        for(let j=1;j<arguments.length;j++){
            if(arr[i]===arguments[j]){
                allowed=0;
                break;
            }
        }
        if(allowed)
            newArr.push(arr[i]);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
