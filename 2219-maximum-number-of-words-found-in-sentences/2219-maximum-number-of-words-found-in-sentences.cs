public class Solution {
    public int MostWordsFound(string[] sentences) {
        int max=0;

        foreach(var sent in sentences){
            int wordcount=sent.Split(" ").Length;
            max=Math.Max(max,wordcount);
        }

        return max;
    }
}