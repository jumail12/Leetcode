public class Solution {
    public int[] PlusOne(int[] digits) {
        string a= String.Join("",digits);
         System.Numerics.BigInteger res = System.Numerics.BigInteger.Parse(a) + 1;
        string f=res.ToString();
        int[] p=new int[f.Length];
        for(int i=0;i<f.Length;i++){
             p[i] = int.Parse(f[i].ToString());
        }
        return p;



        
    }
}