const reverseString = function(word) {
    let wordParts = [];

    for (let i = 0; i < word.length; i++){
        let slicedLetter = word.slice((word.length - i) - 1, (word.length - i));
        wordParts.push(slicedLetter)
    }

    let reversedString = '';
    for (let i = 0; i < wordParts.length; i++){
        reversedString += wordParts[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
