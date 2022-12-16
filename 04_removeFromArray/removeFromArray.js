const removeFromArray = function(array) {
    for (let i = 0; i < arguments.length; i++){
        for (let j = 0; j < array.length; j++){
            if (arguments[i] === array[j]){
                array.splice(j,1);
            }
        }
    }
    return array;


};

//removeFromArray([0,1,2,3], 0, 4, 3)

// Do not edit below this line
module.exports = removeFromArray;
