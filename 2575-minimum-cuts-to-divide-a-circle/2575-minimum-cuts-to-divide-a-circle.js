/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if(n===1){
        return 0
    }else if(n%2===0){
        return n/2
    }else if (n%2!==0){
        return n
    }
    
};