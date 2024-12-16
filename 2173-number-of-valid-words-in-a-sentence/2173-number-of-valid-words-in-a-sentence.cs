using System;
using System.Linq;

public class Solution {
    public int CountValidWords(string sentence) {
        string[] tokens = sentence.Split(" ", StringSplitOptions.RemoveEmptyEntries);

        bool IsValidWord(string token) {
            if (token.Any(char.IsDigit)) return false;

        
            int hyphenCount = token.Count(a => a == '-');
            if (hyphenCount > 1) return false;

            if (hyphenCount == 1) {
                int indexHyphen = token.IndexOf('-');
               
                if (indexHyphen == 0 || indexHyphen == token.Length - 1 ||
                    !char.IsLower(token[indexHyphen - 1]) || !char.IsLower(token[indexHyphen + 1]))
                    return false;
            }

            char[] punctuations = { '!', '.', ',' };
            int punCount = token.Count(a => punctuations.Contains(a));
            if (punCount > 1) return false;

            if (punCount == 1 && !punctuations.Contains(token[^1])) return false;

       
            return true;
        }

        return tokens.Count(IsValidWord);
    }
}
