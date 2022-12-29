const palindromes = function (word) {
    const split = word.split('');

    const filtered = split.filter(letter => {
        if(letter === '!'|| letter === ',' || letter === ' '|| letter === '.' ){
            return false;
        }else{
            return true;
        }
    });

    const mapped = filtered.map(letter => {
        return letter.toLowerCase()
    });

    let result = true;
    for(let i = 0; i < mapped.length; i++){
        if(mapped[i] === mapped.reverse()[i]){
            result = result && true;
        }else{
            result = result && false;
        } 
    }
    return result;
};

//console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
