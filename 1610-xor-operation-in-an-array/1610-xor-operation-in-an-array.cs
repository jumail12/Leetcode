public class Solution {
    public int XorOperation(int n, int start) {
        int xorR=0;

        for(int i=0;i<n;i++){
            int num=start + (2*i);
            xorR^=num;
        }
return xorR;

        
    }
}