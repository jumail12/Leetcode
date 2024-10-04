/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sqr=nums.map((val)=>val*val);
    let sor=sqr.sort((a,b)=>a-b);
    return sor;
    
};