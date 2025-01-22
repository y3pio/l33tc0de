/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime

  // Check for divisibility up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so it's not prime
    }
  }

  return true; // num is not divisible by any number up to its square root, so it's prime
}

var countPrimeSetBits = function(left, right) {
  let result = 0;
  for (i=left; i<=right; i++) {
    const numSetBits = i.toString(2).split('').reduce((sum, n) => {
      if (n === '1') {
        sum +=1;
      }

      return sum;
    }, 0);

    if (isPrime(numSetBits)) {
      result +=1;
    }
  }

  return result;
};