/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerS = s.toLowerCase();
    let finalS='';

    for(let i=0;i<lowerS.length;i++){
        if(lowerS[i]>='a' && lowerS[i]<='z' || lowerS[i]>='0' && lowerS[i]<='9'){
            finalS+=lowerS[i];
        }
    }

    let splited = finalS.split("");
    let reversed = splited.reverse();
    let joined = reversed.join("");

    if(finalS===joined){
        return true
    }else{
        return false;
    }

};