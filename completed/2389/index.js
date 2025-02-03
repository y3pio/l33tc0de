/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  const sortedNums = nums.sort((a,b) => a-b);
  console.log(sortedNums);

  const answer = [];
  queries.forEach(sum => {
    let currSum = 0;
    let i=0
    for(i; i<sortedNums.length; i++) {
      if (currSum + sortedNums[i] > sum) {
        break;
      } else {
        currSum += sortedNums[i]
      }
    }
    answer.push(i)
  })

  return answer;
};