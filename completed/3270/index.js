/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
  const num1Arr = num1.toString().split('');
  while(num1Arr.length < 4) {
    num1Arr.unshift('0')
  }

  const num2Arr = num2.toString().split('');
  while(num2Arr.length < 4) {
    num2Arr.unshift('0')
  }

  const num3Arr = num3.toString().split('');
  while(num3Arr.length < 4) {
    num3Arr.unshift('0')
  }

  let result = '';

  for (let i=0; i<4; i++) {
    const min = Math.min(
      parseInt(num1Arr[i]),
      parseInt(num2Arr[i]),
      parseInt(num3Arr[i])
    )

    result += min.toString();
  }

  return parseInt(result)
};