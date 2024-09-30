/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let a1="";
    let a2="";
    for(let i of word1){
        a1+=i;
    }

      for(let i of word2){
        a2+=i;
    }

    if(a1===a2){
        return true;
    }else{
        return false
    }
    
};