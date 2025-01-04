public class Solution {
    public int[] FindIntersectionValues(int[] nums1, int[] nums2) {

        HashSet<int> setNums2 = new HashSet<int>(nums2);

        int ans1 = 0;
        foreach (int num in nums1) {
            if (setNums2.Contains(num)) {
                ans1++;
            }
        }

   
        HashSet<int> setNums1 = new HashSet<int>(nums1);

        int ans2 = 0;
        foreach (int num in nums2) {
            if (setNums1.Contains(num)) {
                ans2++;
            }
        }

        return new int[] { ans1, ans2 };
    }
}
