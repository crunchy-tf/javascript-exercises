const palindromes = function (str) {
    const new_str = str.toLowerCase().replace(/[^a-z]/g, "");
    for (i = 0; i < new_str.length; i++) {
        if (new_str[i] != new_str[new_str.length-1-i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
