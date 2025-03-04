/**
 * @param {number[]} workers
 * @param {number[][]} tasks
 * @return {number}
 */
var maxProfit = function(workers, tasks) {
  const taskMap = new Map();
  tasks.forEach(t => {
    const [skill, profit] = t;
    if (!taskMap.has(skill)) {
      taskMap.set(skill, [profit]);
    } else {
      const profitList = taskMap.get(skill);
      profitList.push(profit);
      taskMap.set(skill, profitList);
    }
  })

  let profit = 0;

  workers.forEach(skill => {
    if (taskMap.has(skill)) {
      const profitList = taskMap.get(skill);
      let maxCandidate = {
        value: 0,
        index: -1
      }

      // TODO: Use a heap here.
      profitList.forEach((p, i) => {
        if (p > maxCandidate.value) {
          maxCandidate.value = p;
          maxCandidate.index = i;
        }
      });

      profit += maxCandidate.value;
      profitList.splice(maxCandidate.index, 1);

      if (profitList.length === 0) {
        taskMap.delete(skill)
      }
    }
  });

  let max = 0;
  taskMap.forEach((val) => {
    val.forEach((p) => {
      max = Math.max(max, p)
    });
  })


  return profit + max;
};