/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }  
  }

  let heap = [];
  for (const [str, count] of map) {
    console.log(str)
    if (heap.length < k) {
      heap.push([str, count]);
      floatUp(heap, heap.length - 1);
    } else if(heap[0][1] < count || (heap[0][1] === count && heap[0][0] >= str)) {
      heap[0] = [str, count];
      sink(heap, 0)
    }
  }
  
  

  return heap.reverse().map(item => item[0]);
};

var floatUp = function(heap, index) {
  if(!index) return;
  let parentIndex = (index - 1) >> 1;
  if (heap[parentIndex][1] > heap[index][1] || (heap[parentIndex][1] === heap[index][1] && heap[parentIndex][0] <= heap[index][0])) {
    swap(heap, parentIndex, index);
    floatUp(heap, parentIndex);
  }
}

var sink = function(heap, index) {
  let lastIndex = heap.length - 1;
  let leftIndex = index * 2 + 1;
  let tempIndex = index;
  if (leftIndex <= lastIndex &&( heap[leftIndex][1] < heap[index][1] || (heap[leftIndex][1] === heap[index][1] && heap[leftIndex][0] >= heap[index][0]))) {
    tempIndex = index;
  }
  if (leftIndex  + 1 <= lastIndex &&( heap[leftIndex + 1][1] < heap[index][1] || (heap[leftIndex + 1][1] === heap[index][1] && heap[leftIndex + 1][0] >= heap[index][0]))) {
    tempIndex = index;
  }
  if (tempIndex !== index) {
    swap(heap, tempIndex, inedx);
    sink(heap, tempIndex);
  }
}

var swap = function(heap, i, j) {
  [heap[i], heap[j]] = [heap[j], heap[i]];
}