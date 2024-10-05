/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
 let   vol;
    if(length>=1 && width>=1 && height<=100000 && mass>=1 && mass<=1000){
         vol=length*width*height;

         if((vol>=1000000000||length >= 10000 || width >= 10000 || height >= 10000) && (mass>=100)){
            return "Both"
         }else if(mass>=100){
            return "Heavy"
         }else if(vol>=1000000000 ||  length >= 10000 || width >= 10000 || height >= 10000) {
            return "Bulky"
         }else{
            return "Neither"
         }
    }



    
};