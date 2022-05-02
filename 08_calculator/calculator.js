const add = function(...args) {
	return args.reduce((previous, current) => {
    return previous + current;
  });
};

const subtract = function(...args) {
	return args.reduce((previous, current) => {
    return previous - current;
  });
};

const sum = function(arr) {
	if(arr.length == 0){return 0}else{return arr.reduce((previous, current) => {
    return previous + current;
  });}
};

const multiply = function(arr) {
	return arr.reduce((previous, current) => {
    return previous * current;
  });
};

const power = function(n1,n2) {
  return n1**n2
};

const factorial = function(n1) {
  let result = 1
  if(n1==0){
    return 1
  }
  else{
    for(let i = 1;i<=n1;i++){
      result*=i
    }
  }
  return result
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
