public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {
      HashSet<int> set=new HashSet<int>();

      for(int i=0;i<nums.Length;i++){
        if(i>k){
            set.Remove(nums[i-k-1]);
        }
        

        if(set.Contains(nums[i])){
            return true;
        }

       set.Add(nums[i]);
      }
        return false;  
}
}