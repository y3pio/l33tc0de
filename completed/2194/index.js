/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  const startCol = s.charCodeAt(0)
  const startRow = parseInt(s[1])
  const endCol = s.charCodeAt(3)
  const endRow = parseInt(s[4])

  const result = [];
  for(let i=startCol; i<=endCol; i++) {
    for (let j=startRow; j<=endRow; j++) {
      const cell = `${String.fromCharCode(i)}${j}`;
      result.push(cell);
    }
  }

  return result;
};