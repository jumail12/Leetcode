using System;
using System.Text;

public class Solution {
    public int MyAtoi(string s) {
        if (string.IsNullOrEmpty(s)) return 0;

        int i = 0, n = s.Length, sign = 1;
        long num = 0;  
        while (i < n && s[i] == ' ') i++;  


        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }

       
        while (i < n && char.IsDigit(s[i])) {
            num = num * 10 + (s[i] - '0');

            if (num * sign > int.MaxValue) return int.MaxValue;
            if (num * sign < int.MinValue) return int.MinValue;

            i++;
        }

        return (int)(num * sign);
    }
}
