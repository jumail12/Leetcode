/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let ns=[]
    for(let i=0;i<n;i++){
        ns.push(i)
    }
    for(let i=0;i<=nums.length;i++){
        if(  !(nums.includes(ns[i]))  ){
              return i
        }
    }

   
    
};