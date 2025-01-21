/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  return date.split('-').map(n => parseInt(n).toString(2)).join('-');
};