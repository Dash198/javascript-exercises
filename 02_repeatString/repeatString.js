const repeatString = function(sampleString,times) {
    if(times<0)
        return "ERROR";
    str="";
    for(let i=0;i<times;i++){
        str+=sampleString;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
