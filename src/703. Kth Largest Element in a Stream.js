/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.h = new heap(nums);
  this.k = k;
  while(this.h.size() > k) {
    this.h.pop();
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.h.push(val);
  if(this.h.size() > this.k) {
    this.h.pop();
  }
  return this.h.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

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
  let popVal =  this.data.pop();
  
  if (this.size()) {
    this.data[0] = popVal;
    this.buildHeap();
  }
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
  if (this.size() <= 1) {
    return;
  }
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