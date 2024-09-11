/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    res=[];
    map={};
   
   for( num of nums1){
    if(map[num]){
        map[num]++
    }else{
        map[num]=1;
    }
   }

   for (let num of nums2) {
        if (map[num] > 0) {
            res.push(num);
            map[num]--; // Decrease count to handle duplicates
        }
    }
    return res;
    
};