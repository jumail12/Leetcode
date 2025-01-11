public class Solution {
    public IList<int> AddToArrayForm(int[] num, int k) {
      List<int> result = new List<int>();
        int carry = 0;
        int i = num.Length - 1;

      
        while (i >= 0 || k > 0)
        {
            int digitNum = i >= 0 ? num[i] : 0; 
            int digitK = k % 10;             

            int sum = digitNum + digitK + carry;
            result.Add(sum % 10);           
            carry = sum / 10;                 

            k /= 10;                          
            i--;                               
        }

        if (carry > 0)
        {
            result.Add(carry);
        }

        result.Reverse(); // Reverse the result to get the correct order
        return result;
    }
}