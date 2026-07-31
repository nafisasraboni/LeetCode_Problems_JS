/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let ansStack = [];

    for(let i=0;i<=heights.length;i++){
        let currentHeight = (i===heights.length)? 0:heights[i];

        while(ansStack.length>0 && currentHeight < heights[ansStack[ansStack.length-1]]){
            let top = ansStack.pop();
            let height = heights[top];
        
        let width;
        if(ansStack.length===0){
            width = i;
        }else{
            width = i - ansStack[ansStack.length - 1] -1; 
        }
        maxArea = Math.max(maxArea, height*width);
     }   
    ansStack.push(i);    
    }
    
    return maxArea;
};