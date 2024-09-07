const removeFromArray = function(arrayInput, ...args)
{
    let returnArray = [];

    arrayInput.forEach((item) =>
    {
        if(!args.includes(item))
        {
            returnArray.push(item);
        }
    });

    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
