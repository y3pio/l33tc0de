/**
 * @param {number[][]} students
 * @return {number}
 */
var maxStudentsOnBench = function(students) {
  const benches = new Map();
  let max = 0;
  for(s of students) {
    const [student, bench] = s;
    const currentBench = benches.get(bench) || new Set();
    currentBench.add(student);
    max = Math.max(currentBench.size, max);
    benches.set(bench, currentBench)
  }

  return max;
};