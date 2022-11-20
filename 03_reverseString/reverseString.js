const reverseString = function (s) {
    n = s.length
    new_s = ''
    for (i = (n-1); i >= 0; i--) {
        new_s = new_s + s[i]
    }
    return new_s
};

console.log(reverseString('abc'))

// Do not edit below this line
module.exports = reverseString;
