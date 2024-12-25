public class Solution {
    public string ReplaceDigits(string s) {
       
        var strBuilder = new System.Text.StringBuilder();

      
        char Shift(char c, int x) {
            return (char)(c + x);
        }

      
        for (int i = 0; i < s.Length; i++) {
            if (i % 2 == 0) {
             
                strBuilder.Append(s[i]);
            } else {
               
                char shiftedChar = Shift(s[i - 1], s[i] - '0'); 
                strBuilder.Append(shiftedChar);
            }
        }
        return strBuilder.ToString();
    }
}
