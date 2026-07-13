/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1;
    let right=Math.max(...piles);
    let ans=right;

    while(left<=right){
        let k = Math.floor((left+right)/2);
        let totalhours=0;

        for(let pile of piles){
            totalhours+=Math.ceil(pile/k);
        }
        if(totalhours<=h){
            ans=k;
            right=k-1;
        }else{
            left=k+1;
        }
    }
    return ans;
};