console.clear();
const t1 = [1,1,2,1,3] // expected 3
const t2 = [0,1,2] // expected 2

const testBattery = (arr) => {
  let testedCount = 0;

  arr.forEach(battery => {
    if (battery - testedCount > 0) {
      testedCount++;
    }
  })

  return testedCount;
}

console.log(testBattery(t1))
console.log(testBattery(t2))