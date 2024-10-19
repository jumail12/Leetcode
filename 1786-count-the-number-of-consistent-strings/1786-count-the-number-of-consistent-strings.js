/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let consistentCount = 0;
    for (const word of words) {
        if (word.split('').every(char => allowedSet.has(char))) {
            consistentCount++; 
        }
    }
    
    return consistentCount;
};