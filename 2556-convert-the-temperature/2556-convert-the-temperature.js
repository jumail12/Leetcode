/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const feran=(celsius*1.80)+32.00;
    const kelvin=celsius+273.15;

    return [kelvin,feran];
    
};