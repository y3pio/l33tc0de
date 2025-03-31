/**
 * @param {string} s
 * @return {string}
 */
const isEven = (d) => {
  return parseInt(d) % 2 === 0;
}

const isOdd = (d) => {
  return parseInt(d) % 2 === 1;
}

const isGreater = (d1, d2) => {
  return parseInt(d1) > parseInt(d2);
}

var getSmallestString = function(s) {
  const sArr = s.split('');

  for(let i=0; i<sArr.length-1; i++) {
    const x = sArr[i];
    const y = sArr[i+1];

    if (isEven(x) && isEven(y) && isGreater(x,y)) {
      sArr[i] = y;
      sArr[i+1] = x;
      i = sArr.length;
    } else if (isOdd(x) && isOdd(y) && isGreater(x,y)) {
      sArr[i] = y;
      sArr[i+1] = x;
      i = sArr.length;
    }
  }

  return sArr.join('');
};