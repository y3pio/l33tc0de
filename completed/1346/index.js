/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const compliments = new Map();
  for(let i=0; i<arr.length; i++) {
    if (compliments.has(arr[i])) {
      const complimentIndexes = compliments.get(arr[i])
      complimentIndexes.push(i);
      compliments.set(arr[i], complimentIndexes)
    } else {
      compliments.set(arr[i], [i])
    }
    const compliment = arr[i] * 2;
    if (compliments.has(compliment)) {
      const complimentIndexes = compliments.get(compliment)
      if (complimentIndexes.some(idx => idx !== i)) {
        return true;
      }
    }

    if (arr[i] % 2 === 0) {
      const inverseCompliment =  arr[i] / 2;
      if (compliments.has(inverseCompliment)) {
        const complimentIndexes = compliments.get(inverseCompliment)
        if (complimentIndexes.some(idx => idx !== i)) {
          return true;
        }
      }
    }
  }

  return false;
};