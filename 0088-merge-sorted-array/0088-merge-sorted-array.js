/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let p1 = m - 1; // Pointer for the last element of the original nums1
    let p2 = n - 1; // Pointer for the last element of nums2
    let p = m + n - 1; // Pointer for the last position in nums1

    // Merge nums1 and nums2 starting from the end
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1]; // Place the larger element at the end of nums1
            p1--; // Move p1 to the left
        } else {
            nums1[p] = nums2[p2]; // Place the larger element from nums2 at the end
            p2--; // Move p2 to the left
        }
        p--; // Move p to the left
    }

    // If there are still elements left in nums2, copy them
    while (p2 >= 0) {
        nums1[p] = nums2[p2]; // Copy remaining nums2 elements
        p2--;
        p--;
    }
};