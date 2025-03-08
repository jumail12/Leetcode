public class Solution {
    public int[] SearchRange(int[] nums, int target) {
        Array.Sort(nums);
        int[] res=new int[2];
        res[0]=Array.IndexOf(nums,target);
        res[1]=Array.LastIndexOf(nums,target);
        if(res[0] ==-1){
            return new int[]{-1,-1};
        }
        return res;
    }
}