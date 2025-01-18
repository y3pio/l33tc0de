/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let minCandidate = Infinity;
  let maxCandidate = -Infinity;

  const totalSalary = salary.reduce((sum, s) => {
    minCandidate = Math.min(minCandidate, s);
    maxCandidate = Math.max(maxCandidate, s);

    sum +=s;
    return sum;
  }, 0);

  return (totalSalary - minCandidate - maxCandidate) / (salary.length - 2);
};