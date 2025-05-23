/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  const numArray = num.toString().split('');

  while(numArray[numArray.length-1] === '0') {
    numArray.pop();
  }

  return numArray.join('')
};