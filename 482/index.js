console.clear();

// var  s = "5F3Z-2e-9-w", k = 4;
var s = "2-5g-3-J", k = 2
var licenseKeyFormatting = function(s, k) {
  const strArr = s.replaceAll('-', '').split('');
  let remainder = strArr.length % k;

  const result = strArr.reduce((acc, e, i) => {
    acc += e.toUpperCase();
    remainder += 1;
    if (remainder > 0 && remainder % k === 0 && i !== strArr.length-1) {
      acc += '-';
    }
    return acc;
  }, '');

  console.log(result)
};

licenseKeyFormatting(s,k)

/* TODO: Leetcode doesn't seem to accept the below solution
*  s = "2-4A0r7-4k"
*  k = 3
*  My output: "2-4A0-R74-K"
*  Expected??: "24-A0R-74K"
* */