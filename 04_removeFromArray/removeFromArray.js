const removeFromArray = function(arr) {

    let args =[...arguments].slice(1)
    let result = arr.filter(i => !args.includes(i))
    return result
};
// Do not edit below this line
module.exports = removeFromArray;
