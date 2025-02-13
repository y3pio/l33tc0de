/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // Min-heap implementation using a priority queue
  const minHeap = new MinPriorityQueue({ priority: x => x });

  // Add all elements to the min-heap
  for (const num of nums) {
    minHeap.enqueue(num);
  }

  let operations = 0;

  // Perform operations until all elements are >= k
  while (minHeap.size() > 1 && minHeap.front().element < k) {
    const x = minHeap.dequeue().element;
    const y = minHeap.dequeue().element;
    const newElement = Math.min(x, y) * 2 + Math.max(x, y);
    minHeap.enqueue(newElement);
    operations++;
  }

  // Check if the smallest element is still less than k
  if (minHeap.front().element < k) {
    return -1; // Not possible to make all elements >= k
  }

  return operations;
};