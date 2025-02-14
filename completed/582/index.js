/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {

  const processTree = new Map();

  ppid.forEach((parent, i) => {
    const child = pid[i];
    if (processTree.has(parent)) {
      const childList = processTree.get(parent);
      childList.push(child)
      processTree.set(parent, childList)
    } else {
      processTree.set(parent, [child])
    }
  })

  const processToKill = [kill]
  const result = [];

  while(processToKill.length > 0) {
    const killedChild = processToKill.pop();
    result.push(killedChild)
    const nextProcessess = processTree.get(killedChild) || []

    nextProcessess.forEach(p => {
      processToKill.push(p)
    })
  }

  return result;
};