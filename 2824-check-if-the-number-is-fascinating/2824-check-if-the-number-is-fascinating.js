/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let d=2*n;
    let t=3*n;

  if(d>999 && t>999){
    return false
  } else{
      let arr=["1","2","3","4","5","6","7","8","9"];

    let con=[];
    con.push(n,d,t);
   let res= con.toString().split("");
   
   let count=[];
   for(let i=0;i<=res.length-1;i++){
    if(arr.includes(res[i]) && !(count.includes(res[i]))){
        count.push(res[i])
    }
   }
   
   if(count.length===arr.length){
    return true;
   }else{
    return false;
   } 
  }
};