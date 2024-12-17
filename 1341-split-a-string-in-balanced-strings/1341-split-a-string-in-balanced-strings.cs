public class Solution {
    public int BalancedStringSplit(string s) {
       int balance=0;
       int count=0;

       foreach(char c in s){
        if(c=='L'){
            balance++;
        }
        else if(c=='R'){
            balance--;
        }
        if(balance==0){
            count++;
        }
       }
return count;


    }
}