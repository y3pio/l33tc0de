/**
 * @param {number} n
 * @return {boolean}
 */

const rotateMap = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6'
}

const mapRotate = (n) => {
  return rotateMap[n] || '*';
}

var confusingNumber = function(n) {
  const nStr = n.toString()
    .split('')
    .reverse()
    .map(mapRotate)
    .join('');

  if (nStr.includes('*')) {
    return false;
  }

  const rotatedNum = parseInt(nStr);
  return rotatedNum !== n;
};