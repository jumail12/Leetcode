/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   
    let a=image.map((item,index)=>{
      return item.reverse();
    });

    let res=a.map((item)=>{
       return item.map((item)=>item===1?0:1)
      
    })

    return res;

    return a;
    
};