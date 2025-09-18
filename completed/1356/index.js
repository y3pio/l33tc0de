/**
 * @param {number[]} arr
 * @return {number[]}
 */
const countOnes = (s) => {
  let result = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '1') {
      result++;
    }
  }

  return result;
}

var sortByBits = function(arr) {
  const oneArr = arr.map(n => ({
    num: n,
    ones: countOnes(n.toString(2))
  }));
  oneArr.sort((a,b) => {
    if (a.ones < b.ones) {
      return -1;
    } else if (a.ones === b.ones) {
      return a.num < b.num ? -1 : 0
    }

    return 0;
  })
  return oneArr.map(n => n.num)
};