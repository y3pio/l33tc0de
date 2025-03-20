/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function(keysArr, valuesArr) {
  const result = {};

  keysArr.forEach((key, i) => {
    const resultKey = `${key}`;
    if (!Object.keys(result).includes(resultKey)) {
      result[key] = valuesArr[i];
    }
  })

  return result;
};