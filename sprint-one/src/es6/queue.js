class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

enqueue(value) {
    this.storage[value] = value;
  }

 dequeue() {
    var element = Object.keys(this.storage).shift()

    delete this.storage[element];
    return element;

  }

 size() {
    if(Object.keys(this.storage).length < 0 ){
     return 0;
    }
      return Object.keys(this.storage).length;
  }

}

var Queued = new Queue()