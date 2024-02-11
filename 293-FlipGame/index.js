console.clear();

/*
* Can probably be done more efficiently by not having to convert/copy array and join.
* */
const t1 = '++++'
const t2 = '--'

const generatePossibleNextMoves = (currentState) => {
  const results = [];
  const stateArr = currentState.split('');
  stateArr.forEach((c,i,arr) => {

    if (c === arr[i+1] && c === '+') {
      const copyArr = JSON.parse(JSON.stringify(arr));
      copyArr[i] = '-';
      copyArr[i+1] = '-';

      results.push(copyArr.join(''))
    }
  });

  return results;
}

const r1 = generatePossibleNextMoves(t2)

console.log(r1)