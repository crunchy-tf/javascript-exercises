const repeatString = function(s,n) {
    if (n<0) {
        return('ERROR')
    }

    new_s = ''
    for (i = 0 ; i < n ; i ++ ) {
    new_s = new_s+s
    }
    return new_s
};

// Do not edit below this line
module.exports = repeatString;
