const repeatString = function(word, amount) {

    repeatedString = '';
    for(let i =0; i < amount; i++){
        repeatedString += word;
    }

    if(amount >= 0){
        return repeatedString;
    }else{
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = repeatString;
