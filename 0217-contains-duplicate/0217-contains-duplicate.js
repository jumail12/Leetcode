/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let a=[];
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===nums[j]){
    //             a.push(nums[i])
    //         }
    //     }
    // }
    // if(a.length>0){
    //     return true;
    // }else{
    //     return false;
    // }

 let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
    
};