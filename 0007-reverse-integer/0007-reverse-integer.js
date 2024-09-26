/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);  
    const INT_MAX = Math.pow(2, 31) - 1;  

    let a = x.toString();
    let b = a.split("");

    const resm = [];  // For storing the minus sign if any
    const res = [];   // For storing the digits

    for (let i = 0; i <= b.length - 1; i++) {
        if (b[i] === "-") {
            resm.push(b[i]);
        } else {
            res.push(b[i]);
        }
    }

    const revN = res.reverse();
    const final = resm.concat(revN).join("");
    const reversedNumber = Number(final);

    if (reversedNumber < INT_MIN || reversedNumber > INT_MAX) {
        return 0;
    }
    return reversedNumber;
};
