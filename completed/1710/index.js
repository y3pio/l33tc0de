/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => a[1] - b[1])
  let fill = 0;
  let units = 0;
  while(fill < truckSize && boxTypes.length > 0) {
    const last = boxTypes[boxTypes.length-1];
    units += last[1];
    last[0]--;
    fill++;

    if (last[0] === 0) {
      boxTypes.pop();
    }
  }

  return units;
};