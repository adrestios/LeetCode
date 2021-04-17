/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const map = new Map();
  let heap = new Heap((a, b) => a - b, [1])
  while(--n) {
    let top = heap.pop();
    for (let i = 0; i < primes.length; i++) {
      let temp = primes[i] * top;
      if (!map.has(temp)) {
        heap.push(temp);
        map.set(temp, 1);
      }
    }
  }
  
  return heap.pop();
  
};

var Heap = function(comparator, arr) {
  this.comparator = comparator;
  this.nums = arr;
  this._buildHeap();
}

Heap.prototype._buildHeap = function() {
  for (let i = 0; i < this.nums.length; i++) {
    this.floatUp(i)
  }
}

Heap.prototype.floatUp = function(index) {
  while(index) {
    let parentIndex = (index - 1) >> 1;
    if (this.comparator(this.nums[parentIndex], this.nums[index]) >= 0) {
      this.swap(parentIndex, index);
      index = parentIndex;
    } else {
      break
    }
  }
}

Heap.prototype.sink = function(index) {
  let lastIndex = this.nums.length - 1;
  while(index <= lastIndex) {
    let leftIndex = index * 2 + 1;
    let tempIndex = index;
    if (leftIndex <= lastIndex && this.comparator(this.nums[leftIndex], this.nums[tempIndex]) <= 0) {
      tempIndex = leftIndex;
    }
    if ((leftIndex + 1) <= lastIndex && this.comparator(this.nums[leftIndex + 1], this.nums[tempIndex]) <= 0) {
      tempIndex = leftIndex + 1;
    }
    if (tempIndex !== index) {
      this.swap(tempIndex, index);
      index = tempIndex;
    } else {
      break;
    }
  }
}

Heap.prototype.swap = function(i, j) {
  [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
}

Heap.prototype.pop = function() {
  if (this.nums.length === 0) {
    return null;
  }
  let res = this.nums[0];
  let temp = this.nums.pop();
  if (this.nums.length >= 1) {
    this.nums[0] = temp;
    this.sink(0);
  }
  return res;
}

Heap.prototype.push = function(val) {
  this.nums.push(val);
  this.floatUp(this.nums.length - 1);
}

Heap.prototype.peek = function() {
  if (this.nums.length === 0) {
    return null;
  }
  return this.nums[0];
}