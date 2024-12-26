using System;
public class Solution {
    public bool IsPalindrome(string s) {
    
    var res="";
    foreach(char i in s){
      
        if(char.IsLetterOrDigit(i)){
            res+=i;
        }
    }

    char[] arr=res.ToCharArray();
    Array.Reverse(arr);

    string res2=string.Join("",arr);

        if(res.ToLower()==res2.ToLower()){
            return true;
        }else{
            return false;
        }
        
    }
}