/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   let charCodeSumS = 0;
    let charCodeSumT = 0;
    
    // Calculate the sum of char codes for string s
    for (let char of s) {
        charCodeSumS += char.charCodeAt(0);
    }
    
    // Calculate the sum of char codes for string t
    for (let char of t) {
        charCodeSumT += char.charCodeAt(0);
    }
    
    // The difference will give us the extra character
    return String.fromCharCode(charCodeSumT - charCodeSumS);
};