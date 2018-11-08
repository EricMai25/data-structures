// var extend = function( ob1 , ob2){
// 	for(var key in ob2){
// 		ob1[key] = ob2[key];
// 	}
// }
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
   // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.storage = {};
  _.extend(stackInstance, stackMethods)
  return stackInstance;
};


var stackMethods = {};

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
