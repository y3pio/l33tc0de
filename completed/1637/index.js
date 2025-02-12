/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const xCoordinates = []
  points.forEach(p => xCoordinates.push(p[0]))

  let candidate = 0;
  xCoordinates.sort((a,b) => a-b)
  for (let i=0; i<xCoordinates.length - 1; i++) {
    candidate = Math.max(candidate, xCoordinates[i+1] - xCoordinates[i]);
  }

  return candidate;
};