const fibonacci = function(n) {
    let  arr = [1,1]
    let sum = 1
if (+(n) <= 0){return "OOPS"}
if(+(n)===1 || +(n)=== 2){return 1}
for(let i=2;i < +(n);i++){
   sum = arr[arr.length-1] + arr[arr.length-2]
   arr.push(sum)
}
return arr[arr.length-1]

};

// Do not edit below this line
module.exports = fibonacci;
