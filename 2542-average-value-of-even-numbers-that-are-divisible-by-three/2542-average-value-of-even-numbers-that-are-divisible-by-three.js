/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const filtera=nums.filter((item)=>item%6===0);

   if(filtera.length===0){
    return 0;
   }
   else{
     const sum=filtera.reduce((acc,cur)=>{
        return acc+=cur;
    },0);

    const avg=sum/(filtera.length);

    return Math.floor(avg);
   }
    
}