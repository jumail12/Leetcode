/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {

//     if(nums.includes(target)){
//         return nums.indexOf(target);
//     }else if(target==0){
//         return 0;
//     }
    
//     else if(!(nums.includes(target))){
//         for(i of nums){
//             if(i-1==target){
//                 return nums.indexOf(i);

//             }else if(i+1==target||i+2==target||i+3==target||i+4==target){
//                 return (nums.indexOf(i)+1)
//             }
//         }
//     }
    
// };


var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};