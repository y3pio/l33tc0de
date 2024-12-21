/**
 * @param {number} num
 * @return {boolean}
 */

const reverseInt = (n) => {
  const numArr = n.toString().split('');

  while(numArr && numArr[numArr.length-1] === '0') {
    numArr.pop();
  }

  const reversed = parseInt(numArr.join(''));
  return reversed;
}

var isSameAfterReversals = function(num) {
  if (num === 0) {
    return true;
  }

  const reversed2 = reverseInt(reverseInt(num));
  return reversed2 === num;
};