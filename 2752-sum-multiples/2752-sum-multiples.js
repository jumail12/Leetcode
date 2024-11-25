/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let ar=[];

    for(let i=1;i<=n;i++){
        if(i%3==0 || i%5==0 || i%7==0){
            ar.push(i);
        }
    }

    let res=ar.reduce((acc,cur)=>{
        return acc+=cur
    },0);

    return res;
    
};