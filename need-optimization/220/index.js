/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  const seenMap = new Map();
  for (let i=0; i<nums.length; i++) {
    if (seenMap.has(nums[i])) {
      const indices = seenMap.get(nums[i]);
      indices.push(i);
      seenMap.set(nums[i], indices);
    } else {
      seenMap.set(nums[i], [i])
    }
  }

  console.log(seenMap)
  let result = false;
  seenMap.forEach((val, key) => {
    for (i = key-valueDiff; i<= key + valueDiff; i++) {
      const compliment = i;
      if (seenMap.has(compliment)) {
        const complimentIndex = seenMap.get(compliment);
        for (let i=0; i<val.length; i++) {
          const idx = val[i];

          if(complimentIndex.some(i => i !== idx && Math.abs(idx - i) <= indexDiff)) {
            result = true;
          }
        }
      }
    }
  })

  return result;
};