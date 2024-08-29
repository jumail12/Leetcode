/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str=digits.toString().replaceAll(",","");
    let num= BigInt(str)
  
    let sum=num+1n;

    let st=sum.toString();

    let res=st.split("");
    return res;
    
};