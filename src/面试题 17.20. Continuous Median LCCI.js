/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.left = [];
  this.right = [];
};


MedianFinder.prototype._sort = function() {
  if (this.left.length - this.right.length >= 2) {
    this.right.push(this.left.pop())
  }
  if (this.right.length - this.left.length >= 2) {
    this.left.push(this.right.pop());
  }
}

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.left[this.left.length - 1] >= num) {
    this.left.push(num);
    this.left.sort((a, b) => a - b);
  }
  if (this.right[this.right.length - 1] < num) {
    this.right.push(num);
    this.right.sort((a, b) => b - a);
  }
  this._sort();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.left.length === this.right.length) {
    return (this.left[this.left.length - 1] + this.right[this.right.length - 1]) / 2;
  } else {
    return this.left[this.left.length - 1];
  }

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */