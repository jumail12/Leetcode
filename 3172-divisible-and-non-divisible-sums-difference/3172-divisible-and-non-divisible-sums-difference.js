/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let res1=0;
    let res2=0;
    for(let i=1;i<=n;i++){
          if(!(i%m===0)){
            res1+=i;
          }else{
              res2+=i;
          }
    }

 

    let z=res1-res2;
    return z;
};