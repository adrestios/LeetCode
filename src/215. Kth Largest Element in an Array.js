/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = [];
  for (let i = 0; i < nums.length; i++) {
    if (heap.length < (nums.length - k + 1)) {
      heap.push(nums[i]);
      bubbleUp(heap, i);
    } else if (nums[i] < heap[0]) {
      heap[0] = nums[i];
      bubbleDown(heap, 0); 
    }
  }
  console.log(heap)
  return heap[0];
};

var swap = function(heap, i, j) {
  if (i === j) {
    return;
  }
  [heap[i], heap[j]] = [heap[j], heap[i]];
}

var bubbleDown = function(heap, i) {
  let lastIndex = heap.length - 1;
  let leftIndex = i * 2 + 1;
  let tempIndex = i;
  if (leftIndex <= lastIndex && heap[tempIndex] <= heap[leftIndex]) {
    tempIndex = leftIndex;
  }
  if ((leftIndex + 1) <=lastIndex && heap[tempIndex] <= heap[leftIndex + 1]) {
    tempIndex = leftIndex + 1;
  }
  if (tempIndex !== i) {
    swap(heap, tempIndex, i);
    i = tempIndex;
    bubbleDown(heap, i);
  }
}

var bubbleUp = function(heap, i) {
  let parentIndex = (i - 1) >> 1;
  if (heap[i] > heap[parentIndex]) {
    swap(heap, i, parentIndex)
    bubbleUp(heap, parentIndex);
  }
}