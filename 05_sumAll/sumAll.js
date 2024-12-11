const sumAll = function(a,b) {
    let error="ERROR";
    if(typeof(a)!="number" || typeof(b)!="number")
        return error;
    else if(a!=Math.floor(a) || b!=Math.floor(b))
        return error;
    else if(a<0 || b < 0)
        return error;
    let sum=0;
    if(a>b){
        sum=a;
        a=b;
        b=sum;
        sum=0;
    }
    for(let i=a;i<=b;i++){
        sum+=i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
