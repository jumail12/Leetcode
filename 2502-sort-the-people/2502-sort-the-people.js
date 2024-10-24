/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let obj=[];

    for(let i=0;i<heights.length;i++){
          obj.push({ Name: names[i], Height: heights[i] });
    }

    let sortA=obj.sort((a,b)=>b.Height-a.Height);

     let res= sortA.map((item)=>item.Name);
     return res;
    
};