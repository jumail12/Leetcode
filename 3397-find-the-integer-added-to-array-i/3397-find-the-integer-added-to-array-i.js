/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
  
 sort1=nums1.sort((a,b)=>a-b)
 sort2=nums2.sort((a,b)=>a-b)

let x=sort2[0]-sort1[0];


let res=[];

  for(let i=0;i<=sort1.length-1;i++){
    if((sort2[i]-sort1[i])!==x){
        return null;
    }else{
        
    }
  }
  return x;

  return res[0];
    
};