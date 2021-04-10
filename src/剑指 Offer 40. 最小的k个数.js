/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  let res = [];
  if (!arr.length || !k) {
    return res;
  }
  let h = new heap(arr);
  for (let i = 0; i < k; i++) {
    res.push(h.pop());
  }
  return res;

};

var heap = function (array) {
  this.data = array;
  this.comparator = (a, b) => a <= b
  this.buildHeap()
}

heap.prototype.buildHeap = function() {
  let length = this.size();

  for (let i = 0; i < length; i++) {
    this.bubbleUp(i)
  }
}

heap.prototype.size = function() {
  return this.data.length;
}

heap.prototype.peek = function() {
  if (!this.size()) {
    return null;
  }
  return this.data[0];
}

heap.prototype.pop = function() {
  if (!this.size()) {
    return null;
  }
  let res = this.data[0];
  this.data[0] = this.data.pop();
  this.buildHeap();
  return res;
}

heap.prototype.push = function(value) {
  this.data.push(value);
  this.bubbleUp(this.size() - 1);
}

heap.prototype.bubbleDown = function(index) {
  let lastIndex = this.size() - 1;
  while(index <= lastIndex) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let tempIndex = index;
    if (leftIndex <= lastIndex && !this.comparator(this.data[tempIndex], this.data[leftIndex])) {
      tempIndex = leftIndex;
    }
    if (rightIndex <= lastIndex && !this.comparator(this.data[tempIndex], this.data[rightIndex])) {
      tempIndex = rightIndex;
    }
    if (tempIndex !== index) {
      this.swap(tempIndex, index);
      index = tempIndex
    } else {
      break;
    }
  }
}

heap.prototype.bubbleUp = function(index) {
  while(index) {
    let parentIndex = (index - 1) >> 1;
    if (this.comparator(this.data[index], this.data[parentIndex])) {
      this.swap(index, parentIndex);
      index = parentIndex;
    } else {
      break;
    }
  }
}
heap.prototype.swap = function(i, j) {
  if (i === j) {
    return;
  }
  [this.data[j], this.data[i]] = [this.data[i], this.data[j]];
}