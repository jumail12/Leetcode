public class Solution
{
    public IList<string> GenerateParenthesis(int n)
    {
        var result = new List<string>();
        Backtrack(result, "", 0, 0, n);
        return result;
    }

    private void Backtrack(List<string> result, string current, int open, int close, int max)
    {
        // If the current combination is complete
        if (current.Length == max * 2)
        {
            result.Add(current);
            return;
        }

        // Add '(' if we still have '(' left to use
        if (open < max)
        {
            Backtrack(result, current + "(", open + 1, close, max);
        }

        // Add ')' if we can close an open '('
        if (close < open)
        {
            Backtrack(result, current + ")", open, close + 1, max);
        }
    }
}