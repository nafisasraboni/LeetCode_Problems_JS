/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    function isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    let newStr = '';

    for (let c of s) {
        if (isAlphanumeric(c)) {
            newStr += c.toLowerCase();
        }
    }

    return newStr === newStr.split('').reverse().join('');
};