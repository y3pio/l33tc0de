/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const textArr = text.split(' ');
  const result = [];

  for(let i=0; i<textArr.length; i++) {
    if (textArr[i-1] === second && textArr[i-2] === first) {
      result.push(textArr[i])
    }
  }

  return result;
};