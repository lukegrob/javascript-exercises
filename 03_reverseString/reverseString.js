const reverseString = function(inputString) {
    
    let returnString ="";
for(let i = (inputString.length-1);i >= 0;i--)
{
    returnString += inputString[i].toString();
}

return returnString.toString();
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
