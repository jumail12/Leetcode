public class Solution {
    public int MaxScore(string s) {
        int totalOnece=0;
        foreach(char c in s){
            if(c=='1'){
                totalOnece++;
            } 
        }

        int leftzero=0;int rightonce=totalOnece;
        int max=0;

        for(int i=0;i<s.Length-1;i++){
            if(s[i]=='0'){
                leftzero++;
            }else{
                rightonce--;
            }
            int score=rightonce+leftzero;
            max=Math.Max(max,score);
        }
        return max;
    }
}