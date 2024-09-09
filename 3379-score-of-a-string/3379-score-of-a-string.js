/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  
let score=0;
   for(i=0;i<s.length-1;i++){
    let dff=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1));
    score+=dff;
   }
   return score;
};