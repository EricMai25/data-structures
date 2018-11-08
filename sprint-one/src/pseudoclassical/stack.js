var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Stack.prototype.push =function(value){

	this.storage[value] = value;
}
Stack.prototype.pop = function(){
	element = Object.keys(this.storage).pop()

    delete this.storage[element];
    return element;
}
Stack.prototype.size = function() {
    if(Object.keys(this.storage).length < 0 ){
      return 0;
    }
    return Object.keys(this.storage).length;
  };

  var stacking = new Stack()