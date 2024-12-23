public class Solution {
    public string TruncateSentence(string s, int k) {
        var arr=s.Split(" ");
        var res=new List<string>();

        for(int i=0;i<k;i++){
        
                res.Add(arr[i]);
            
        }

        return string.Join(" ",res);
    }
}