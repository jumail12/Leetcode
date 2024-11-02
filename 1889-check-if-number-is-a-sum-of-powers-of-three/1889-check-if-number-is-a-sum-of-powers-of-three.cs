public class Solution {
    public bool CheckPowersOfThree(int n) {
        while (n > 0) {
            if (n % 3 == 2) {
                return false; // If remainder is 2, it can't be represented as sum of distinct powers of 3
            }
            n /= 3;
        }
        return true;
    }
}
