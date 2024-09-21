/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(Number.isInteger(n/2)){
        return n
    }else{
      return  n*2
    }
    
};