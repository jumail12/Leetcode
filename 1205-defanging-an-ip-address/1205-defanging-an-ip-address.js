/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const a= address.replaceAll(".","[.]");
    return a;
    
};