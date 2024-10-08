/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res=s.trim().split(" ");
    let a=[]
    for(let i of res){
        a.push(i.split("").reverse().join(""))
    }
    return a.join(" "); 
};