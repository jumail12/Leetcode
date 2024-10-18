/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   let[year,month,day]=date.split("-");
return  `${parseInt(year).toString(2)}-${parseInt(month).toString(2)}-${parseInt(day).toString(2)}`;


 



};