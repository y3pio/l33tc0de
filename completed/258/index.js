/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let numStr = num.toString();

  while(numStr.length > 1) {
    let newSum = 0;
    for(let i=0; i<numStr.length; i++) {
      newSum += parseInt(numStr[i])
    }

    numStr = newSum.toString();
  }

  return parseInt(numStr)
};