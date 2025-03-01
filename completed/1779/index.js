/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const distance = (x1, x2, y1, y2) => {
  return Math.abs(x1-x2) + Math.abs(y1-y2);
}

var nearestValidPoint = function(x, y, points) {
  let smallestCandidate = {
    value: Infinity,
    index: -1
  }

  points.forEach((p, i) => {
    if (p[0] === x || p[1] === y) {
      const dist = distance(x, p[0], y, p[1]);
      if (dist < smallestCandidate.value) {
        smallestCandidate.value = dist;
        smallestCandidate.index = i;
      }
    }
  });

  return smallestCandidate.index;
};