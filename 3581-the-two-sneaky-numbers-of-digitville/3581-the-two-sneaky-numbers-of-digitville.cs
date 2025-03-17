public class Solution {
    public int[] GetSneakyNumbers(int[] nums) {
        HashSet<int> res=new HashSet<int>();
        for(int i=0;i<nums.Length-1;i++){
            var oc1 =Array.IndexOf(nums,nums[i]);
             var oc2=Array.LastIndexOf(nums,nums[i]);
                if(oc1!=oc2){
                        res.Add(nums[i]);
                }
        }
        return res.ToArray();
    }
}