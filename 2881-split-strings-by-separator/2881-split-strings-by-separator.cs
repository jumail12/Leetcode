public class Solution {
    public IList<string> SplitWordsBySeparator(IList<string> words, char separator) {
        List<string> res= new List<string>();
        foreach(string str in words){
             if(str.Contains(separator)){
                  var a= str.Split(separator,StringSplitOptions.RemoveEmptyEntries);
                res.AddRange(a);
             }   else{
                res.Add(str);
             }  
        }
         
       return res;
    }
}
