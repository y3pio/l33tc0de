/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  return !(rec1[2] <= rec2[0] || // rec1 is to the left of rec2
    rec1[0] >= rec2[2] || // rec1 is to the right of rec2
    rec1[3] <= rec2[1] || // rec1 is below rec2
    rec1[1] >= rec2[3]);  // rec1 is above rec2
};