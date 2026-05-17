/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let res=0;

    while(l<r){
        let width=r-l;
        const area= Math.min(height[l],height[r])*(width);
        res=Math.max(res,area);

        if(height[l]<=height[r]){
            l++;
        }else{
            r--;
        }
    }

return res;
};