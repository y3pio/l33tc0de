/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const isUnique = (n) => {
  const nArr = n.toString().split('');
  const uniqueArr = nArr.reduce((acc, n) => {
    if (!acc.includes(n)) {
      acc.push(n);
    }

    return acc;
  }, []);

  return nArr.length === uniqueArr.length;
}
var numberCount = function(a, b) {
  let result = 0;
  for (let i=a; i<=b; i++) {
    if (isUnique(i)) {
      result += 1;
    }
  }

  return result;
};