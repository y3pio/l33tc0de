/**
 * @param {string[]} numbers
 * @return {boolean}
 */
var phonePrefix = function(numbers) {
  for(let i=0; i<numbers.length; i++) {
    const current = numbers[i];

    const hasPrefix = numbers.some((n, idx) => {
      if (idx !== i && n.indexOf(current) === 0) {
        return true;
      }
    })

    if (hasPrefix) {
      return false;
    }
  }

  return true;
};