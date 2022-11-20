const sumAll = function (n1, n2) {
    console.log(isNaN(n1))
    console.log(isNaN(n2))

    if(n1<0 || n2<0) {
        return 'ERROR'
    } 
    if(!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return 'ERROR'
    }
    let s = 0
    if (n1 < n2) {
        for (i = n1; i <= n2; i++) {
            s += i
        }
    } else if (n1 > n2) {
        for (i = n2; i <= n1; i++) {
            s += i
        }
    } else {
        return ('ERROR')
    }
    return s
};

// Do not edit below this line
module.exports = sumAll;
