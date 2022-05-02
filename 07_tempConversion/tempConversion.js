const ftoc = function(n) {
  let result = (n - 32) * 5/9
   return +(result).toFixed(1)
};

const ctof = function(n) {
  let result = (n * 9/5) + 32
  return +(result).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
