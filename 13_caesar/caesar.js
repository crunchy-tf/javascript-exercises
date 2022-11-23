const caesar = function (str, position) {
    isCapitalLetter = /[A-Z]/
    isNotCapitalLetter = /[a-z]/
    newStr = ''
    for (i = 0; i < str.length; i++) {
        if (isCapitalLetter.test(str[i])) {
            code = str[i].charCodeAt(0)
            if (position > 0) {
                for (j = 0; j < position; j++) {
                    if (code >= 90) {
                        code = 65
                    } else { code++ }
                }    
            } else if (position <0) {
                for (j = 0; j > position; j--) {
                    if (code <= 65) {
                        code = 90
                    } else { code-- }
                }    
            }
            char = String.fromCharCode(code)
            newStr += char
        } else if (isNotCapitalLetter.test(str[i])) {
            code = str[i].charCodeAt(0)
            if (position>0){
                for (j = 0; j < position; j++) {
                    if (code >= 122) {
                        code = 97
                    } else { code++ }
                }    
            } else if (position<0) {
                for (j = 0; j > position; j--) {
                    if (code <= 97) {
                        code = 122
                    } else { code-- }
                }    
            }
            char = String.fromCharCode(code)
            newStr += char
        } else {
            newStr += str[i]
        }
    }
    return newStr
};

// Do not edit below this line
module.exports = caesar;
