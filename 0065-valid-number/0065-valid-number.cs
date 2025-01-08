using System.Text.RegularExpressions;
public class Solution {
    public bool IsNumber(string s) {
        
        string pattern = @"^[\+\-]?((\d+\.\d*)|(\d*\.\d+)|(\d+))([eE][\+\-]?\d+)?$";

       
        return Regex.IsMatch(s, pattern);
    }
}