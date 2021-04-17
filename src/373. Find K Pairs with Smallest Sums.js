/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let heap = [];
  for(let i = 0; i < nums1.length; i++) {
      for(let j = 0; j < nums2.length; j++) {
          if(heap.length < k) {
              heap.push([nums1[i], nums2[j]]);
              bubbleUp(heap, heap.length - 1)
          } else if(nums1[i] + nums2[j] < heap[0][0] + heap[0][1]) {
              heap[0] = [nums1[i], nums2[j]]
              bubbleDown(heap, 0);
          }
      }
  }
  console.log(heap)
  return heap.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
};

var bubbleUp = function(arr, i) {
  while(i) {
      let parentIndedx = (i - 1) >> 1;
      if(arr[i][0] + arr[i][1] > arr[parentIndedx][0] + arr[parentIndedx][1]) {
          swap(arr, parentIndedx, i);
          i = parentIndedx;
      } else {
          break;
      }
  }
}

var bubbleDown = function(arr, i) {
  let lastIndex = arr.length - 1;
  while(i < lastIndex) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let tempIndex = i;
      if(leftIndex <= lastIndex && (arr[tempIndex][0] + arr[tempIndex][1] <= arr[leftIndex][0] + arr[leftIndex][1])) {
          tempIndex = leftIndex;
      }
      if(rightIndex <= lastIndex && (arr[tempIndex][0] + arr[tempIndex][1] <= arr[rightIndex][0] + arr[rightIndex][1])) {
          tempIndex = rightIndex;
      }
      if(tempIndex !== i) {
          swap(arr, tempIndex, i);
          i = tempIndex;
      } else {
          break;
      }
  }
}

var swap = function(arr, tempIndex, i) {
  [arr[tempIndex], arr[i]] = [arr[i], arr[tempIndex]] 
}