const repeatString = function(word, amount) {
    let newWord = "";
    if(amount < 0)
    {
        return "ERROR";
    }
    for(let i = 0;i<amount;i++)
    {
        newWord += String(word);
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
