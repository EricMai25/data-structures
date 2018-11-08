var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
	var instance = {};
	instance.storage = {};
	_.extend(instance , queueMethods)
	return instance; 
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
    this.storage[value] = value;
  };

queueMethods.dequeue = function() {
    var element = Object.keys(this.storage).shift()

    delete this.storage[element];
    return element;

  };
queueMethods.size = function() {
    if(Object.keys(this.storage).length < 0 ){
     return 0;
    }
      return Object.keys(this.storage).length;
  };


