using System;
using System.Collections.Generic;

public class Solution {
    public bool WordPattern(string pattern, string s) {
        
        string[] words = s.Split(' ');
        
     
        if (pattern.Length != words.Length) {
            return false;
        }

       
        Dictionary<char, string> charToWord = new Dictionary<char, string>();
        Dictionary<string, char> wordToChar = new Dictionary<string, char>();

 
        for (int i = 0; i < pattern.Length; i++) {
            char c = pattern[i];
            string word = words[i];

          
            if (charToWord.ContainsKey(c)) {
                if (charToWord[c] != word) {
                    return false;
                }
            } else {
                charToWord[c] = word;
            }

           
            if (wordToChar.ContainsKey(word)) {
                if (wordToChar[word] != c) {
                    return false;
                }
            } else {
                wordToChar[word] = c;
            }
        }

        return true;
    }
}
