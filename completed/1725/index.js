/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let maxSquareLength = 0;
  const squareLengthMap = new Map();

  rectangles.forEach(r => {
    const l = r[0];
    const w = r[1];

    const squareLength = Math.min(l, w);
    maxSquareLength = Math.max(squareLength, maxSquareLength);

    if (squareLengthMap.has(squareLength)) {
      squareLengthMap.set(squareLength, squareLengthMap.get(squareLength) + 1)
    } else {
      squareLengthMap.set(squareLength, 1);
    }
  })

  return squareLengthMap.get(maxSquareLength)
};