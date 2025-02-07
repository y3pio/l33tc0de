/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
  const nArr = n.toString(2).split('');
  for(let i=nArr.length-1; i>=0; i--) {
    if (nArr[i] === '0') {
      nArr[i] = '1';
    }
  }

  return parseInt(nArr.join(''), 2)
};