/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let a=title.trim().toLowerCase().split(" ");  
    let res=a.map((item)=>{
        if(item.length>2){
           return item.charAt(0).toUpperCase()+item.slice(1)
        }else{
            return item;
        }
    });
    return res.join(" ");

};