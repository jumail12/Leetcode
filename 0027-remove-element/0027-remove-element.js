/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let k = 0; // Counter for elements that are not equal to val

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val
        if (nums[i] !== val) {
            // Assign it to the k-th position in the array
            nums[k] = nums[i];
            // Increment the counter
            k++;
        }
    }

    // The first k elements in nums are now the elements that are not equal to val
    return k;
    
};