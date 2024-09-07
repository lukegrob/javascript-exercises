const sumAll = function(num1,num2) {
    let answer = 0;

    if(num2<num1)
    {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(!(typeof num1 === "number") || !(typeof num2 === "number")) return "ERROR";
    if((num1 < 0) || (num2 < 0)) return "ERROR";
    if(!(Number.isInteger(num1)) || !(Number.isInteger(num2))) return "ERROR";

    do {
        answer += num1;
        if(num1 == num2) break;
        num1++;
    }
    while(num1<=num2)

return answer;
};

// Do not edit below this line
module.exports = sumAll;
