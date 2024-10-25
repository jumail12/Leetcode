public class Solution {
    public int SumOfUnique(int[] nums) {

     int sum=nums.GroupBy(e=>e)
              .Where(g=>g.Count()==1)
              .Select(g=>g.Key)
              .Sum();

       return sum;
        
    }
}