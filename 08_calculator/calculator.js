const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(container) {
	let sum = 0;
  container.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(container) {
  let product = 1;
  container.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
	if (num === 1 || num == 0){
    return 1;
  }else{
    return num*factorial(num-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
