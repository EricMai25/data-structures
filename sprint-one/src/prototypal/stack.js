var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

stackMethods = {};


stackMethods.push =function(value){

	this.storage[value] = value;
}
stackMethods.pop = function(){
	element = Object.keys(this.storage).pop()

    delete this.storage[element];
    return element;
}
stackMethods.size = function() {
    if(Object.keys(this.storage).length < 0 ){
      return 0;
    }
    return Object.keys(this.storage).length;
  };