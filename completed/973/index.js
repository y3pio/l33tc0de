/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const distance = ([x,y]) => {
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}
var kClosest = function(points, k) {
  points.sort((a,b) => distance(a) - distance(b))

  while(points.length > k) {
    points.pop();
  }

  return points;
};