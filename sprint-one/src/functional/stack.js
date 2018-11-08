var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++
  };

  someInstance.pop = function() {
    var element = Object.keys(storage).pop()
    var value = storage[element]
    delete storage[element];
    return value;
    size --

  };

  someInstance.size = function() {
    if(Object.keys(storage).length < 0 ){
      return 0;
    }
    return Object.keys(storage).length;
  };

  return someInstance;
};
