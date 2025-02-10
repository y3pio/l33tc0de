/**
 * @param {string[]} timePoints
 * @return {number}
 */
const MAX = 1440;

const convertToMin = (timeString) => {
  const [hour, min] = timeString.split(':');
  return (parseInt(hour) * 60) + parseInt(min);
}

var findMinDifference = function(timePoints) {
  const seenSet = new Set();
  for (let i=0; i<timePoints.length; i++) {
    const convertedMin = convertToMin(timePoints[i]);
    timePoints[i] = convertedMin;

    if (seenSet.has(convertedMin)) {
      return 0;
    } else {
      seenSet.add(convertedMin);
    }
  }

  let minCandidate = Infinity;

  for (let i=0; i<timePoints.length; i++) {
    for(let j=i+1; j<timePoints.length; j++) {
      const time1 = timePoints[i];
      const time2 = timePoints[j];

      let result;

      if (time1 > time2) {
        result = Math.min(time1 - time2, MAX-time1 + time2);

      } else {
        result = Math.min(time2 - time1, MAX-time2 + time1);
      }

      minCandidate = Math.min(minCandidate, result);
    }
  }

  return minCandidate;
};