const removeFromArray = function (arr, ...args) {
    args.forEach(n => {
        if (arr.includes(n)) {
            index = arr.indexOf(n)
            arr.splice(index, 1)    
        }
    })
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
