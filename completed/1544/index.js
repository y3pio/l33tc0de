/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [];

  for (const char of s) {
    if (
      stack.length > 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32
    ) {
      stack.pop(); // Remove the bad pair
    } else {
      stack.push(char); // Add the character to the stack
    }
  }

  return stack.join('');
};