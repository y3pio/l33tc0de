/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let sum = 0;

  for (let i=0; i<points.length-1; i++) {
    const [x,y] = points[i];
    const [x2, y2] = points[i+1]

    sum += Math.max(Math.abs(x-x2), Math.abs(y-y2));
  }

  return sum;
};