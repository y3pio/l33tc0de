/**
 * @param {number} num
 * @return {number}
 */
const isSamePriarity = (n,m) => {
  return n % 2 === m % 2;
}
var largestInteger = function(num) {
  if (num <= 11) {
    return num;
  }

  const numArray = num.toString().split('').map(n => parseInt(n));

  for (let i=0; i<numArray.length - 1; i++) {
    for (j=i+1; j<numArray.length; j++) {
      const num1 = numArray[i];
      const num2 = numArray[j];

      if (isSamePriarity(num1, num2) && num2 > num1) {
        numArray[i] = num2;
        numArray[j] = num1;
      }
    }
  }

  return parseInt(numArray.map(n => n.toString()).join(''))
};