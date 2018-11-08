class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }
pop(){
	var element = Object.keys(this.storage).pop()
    delete this.storage[element];
    return element;
}
push(value){
	this.storage[value] = value;
}

size() {
    if(Object.keys(this.storage).length < 0 ){
      return 0;
    }
    return Object.keys(this.storage).length;
  }	
}



var stacked = new Stack();