/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    

let comp=~num;

let bitL=(num.toString(2).length);  //3

let mask=(1<<bitL)-1

let positC=comp & mask;

return positC;
    
};