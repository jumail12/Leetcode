/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr=s.trim().split(" ");
    let ele=arr[arr.length-1];
    let len=ele.length;
    return len;
    
};