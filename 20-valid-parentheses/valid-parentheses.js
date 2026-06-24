/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let CloseToOpen ={
        ')':'(',
        '}':'{',
        ']':'[',
    };

    for(let c of s){
        if(CloseToOpen[c]){
            if(stack.length>0 && stack[stack.length-1]===CloseToOpen[c]){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(c);
        }
    }
   return stack.length===0; 
};