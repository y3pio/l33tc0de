/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function(version1, version2) {
  const ver1Arr = version1.split('.').map(ver => parseInt(ver));
  const ver2Arr = version2.split('.').map(ver => parseInt(ver));
  
  const length = Math.max(ver1Arr.length, ver2Arr.length);

  for (let i=0; i<length; i++) {
    const v1 = ver1Arr[i] || 0;
    const v2 = ver2Arr[i] || 0;

    if (v1 !== v2) {
        return v1 > v2 ? 1 : -1
    }
  }

  return 0;
};
