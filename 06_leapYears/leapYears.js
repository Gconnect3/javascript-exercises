const leapYears = function(n1) {
    if(n1%4==0 && n1%100 ==0 && n1%400==0){
        return true
    } else if(n1%4==0 && n1%100==0){ return false} else if(n1%100==0){return false} else if (n1%4==0){return true} else  {return false}
};

// Do not edit below this line
module.exports = leapYears;
