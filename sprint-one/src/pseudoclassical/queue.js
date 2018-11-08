var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};




Queue.prototype.enqueue = function(value) {
	
    this.storage[value] = value;
  };

Queue.prototype.dequeue = function() {
    var element = Object.keys(this.storage).shift()

    delete this.storage[element];
    return element;

  };
Queue.prototype.size = function() {
    if(Object.keys(this.storage).length < 0 ){
     return 0;
    }
      return Object.keys(this.storage).length;
  };

var Queued = new Queue();