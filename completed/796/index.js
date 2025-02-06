/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  let l = 0;
  let r = 0;

  const startIndex = [];

  while (r < goal.length) {
    if (s[l] === goal[r]) {
      startIndex.push(r);
    }
    r++;
  }

  let canRotate = false;

  startIndex.forEach(start => {
    r = start;
    for (let i=0; i<s.length; i++) {
      if (s[i] !== goal[r]) {
        return false;
      }

      r = r === goal.length - 1 ? 0 : r + 1;
    }

    canRotate = true;
  })

  return canRotate;
};