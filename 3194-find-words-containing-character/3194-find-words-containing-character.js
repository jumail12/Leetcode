/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
   
res=[];

words.forEach((words,index)=>{
    if(words.includes(x)){
        res.push(index);
    }
})

return res;
    
};