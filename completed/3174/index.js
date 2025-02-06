/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  let i=0;
  const result = [];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  while(i<s.length) {
    if (nums.includes(s[i])) {
      result.pop();
    } else {
      result.push(s[i])
    }

    i++;
  }

  return result.join('')
};