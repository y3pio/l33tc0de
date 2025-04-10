/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const base2num = num.toString(2);
  let complimentBase2 = '';
  for(let c of base2num) {
    complimentBase2 += c === '1' ? '0' : '1';
  }

  return parseInt(complimentBase2, 2)
};