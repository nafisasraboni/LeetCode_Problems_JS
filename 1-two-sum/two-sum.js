/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prev_map = new Map();

    for(i=0;i<=nums.length;i++){
        const diff = target - nums[i];
        if(prev_map.has(diff)){
            return [prev_map.get(diff),i];
        }
        prev_map.set(nums[i],i);

    }

};

    