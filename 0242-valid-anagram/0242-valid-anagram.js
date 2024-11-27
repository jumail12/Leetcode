/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let reT=t.split("").sort().join("");
    let reS=s.split("").sort().join("");

    if(reT===reS){
        return true;
    }else{
        return false;
    }
};