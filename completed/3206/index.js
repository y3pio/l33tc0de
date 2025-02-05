/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
  let result = 0;
  for (let i=0; i<colors.length; i++) {
    const left = i-1 === -1 ? colors.length-1 : i-1;
    const right = i+1 === colors.length ? 0 : i+1;
    if (colors[left] === colors[right] && colors[i] !== colors[left]) {
      result++;
    }
  }

  return result;
};