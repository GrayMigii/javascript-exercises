const findTheOldest = function(array) {
    const sorted = array.sort((obj1, obj2) => {
        if (obj1.hasOwnProperty('yearOfDeath') && obj2.hasOwnProperty('yearOfDeath')){
            return (obj1.yearOfDeath - obj1.yearOfBirth) > (obj2.yearOfDeath - obj2.yearOfBirth)? -1 : 1;
        }else{
            const currentYear = new Date().getFullYear();
            return (currentYear - obj1.yearOfBirth) > (currentYear - obj2.yearOfBirth)? -1 : 1;
        }     
        
    });

    return sorted[0];
};



// Do not edit below this line
module.exports = findTheOldest;
