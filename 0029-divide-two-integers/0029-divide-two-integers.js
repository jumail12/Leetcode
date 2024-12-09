/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
       const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let a=dividend / divisor;
      if (a > INT_MAX) return INT_MAX;
    if (a < INT_MIN) return INT_MIN;

    return Math.trunc(a);
};