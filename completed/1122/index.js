/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const priorityMap = new Map();

  arr2.forEach(key => {
    priorityMap.set(key, []);
  })

  const rest = [];
  arr1.forEach(key => {
    if(priorityMap.has(key)) {
      const val = priorityMap.get(key);
      val.push(key);
      priorityMap.set(key, val);
    } else {
      rest.push(key);
    }
  })

  let result = [];

  rest.sort((a,b) => a-b)

  arr2.forEach(key => {
    result = [...result, ...priorityMap.get(key)]
  })

  return [...result, ...rest];
};