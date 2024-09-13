/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = ''; 
    let carry = 0;   
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    
    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10); 
        result = (sum % 10) + result; 
        
        i--;
        j--;
    }
    
    return result;
};
