/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);  
    const INT_MAX = Math.pow(2, 31) - 1;  
    
    // Convert number to string and split it into an array of characters
    let a = x.toString();
    let b = a.split("");
    
    const resm = [];  // For storing the minus sign if any
    const res = [];   // For storing the digits

    // Separate the minus sign from the digits
    for (let i = 0; i <= b.length - 1; i++) {
        if (b[i] === "-") {
            resm.push(b[i]);
        } else {
            res.push(b[i]);
        }
    }

    // Reverse the digits array
    const revN = res.reverse();
    
    // Concatenate minus sign (if any) and reversed digits, then join into a string
    const final = resm.concat(revN).join("");

    // Convert the result back to a number
    const reversedNumber = Number(final);

    // Check if the reversed number is within the 32-bit signed integer range
    if (reversedNumber < INT_MIN || reversedNumber > INT_MAX) {
        return 0;
    }

    return reversedNumber;
};
