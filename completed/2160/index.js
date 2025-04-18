/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const bucket = num.toString().split('');
  bucket.sort((a,b) => a - b);
  const n1 = parseInt(`${bucket[0]}${bucket[2]}`)
  const n2 = parseInt(`${bucket[1]}${bucket[3]}`)

  return n1 + n2;
};