const palindromes = function (string) {
let stringNoPunctuation = string.replace(/[^\w\s]|_/g, "")
let finalString = stringNoPunctuation.replace(/\s+/g, "").toLowerCase()
let reversed = finalString.split("").reverse().join("").toLowerCase()
if(finalString === reversed){return true}else{return false}
};

// Do not edit below this line
module.exports = palindromes;
