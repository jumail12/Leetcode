/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newq=[];
    for(i=0;i<=arr.length-1;i++){
       newq.push(fn(arr[i],i))
    }
    return newq;
};


