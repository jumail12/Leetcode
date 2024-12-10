/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
      const map = new Map();

    for (let word of strs) {
      
        const sortedWord = word.split('').sort().join('');
        
        
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        
        
        map.get(sortedWord).push(word);
    }

 
    return Array.from(map.values());
    
};