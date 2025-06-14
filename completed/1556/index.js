/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const nArr = n.toString().split('');
  let result = '';

  let count = 1;
  for (let i=nArr.length-1; i>=0; i--) {
    result = nArr[i] + result;

    if (count % 3 === 0 && i !== 0) {
      result = '.' + result;
    }

    count++
  }

  return result;
};