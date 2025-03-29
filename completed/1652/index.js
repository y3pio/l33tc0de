/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  return code.map((n, i) => {
    let sum = 0;
    let count = 0;
    if (k > 0) {
      while (count < Math.abs(k)) {
        i++;
        if (i===code.length) {
          i=0;
        }
        sum += code[i];
        count++;
      }
    } else if (k < 0) {
      while (count < Math.abs(k)) {
        i--;
        if (i===-1) {
          i=code.length-1;
        }
        sum += code[i];
        count++;
      }
    }

    return sum;
  })
};