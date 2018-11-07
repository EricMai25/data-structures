var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = value;
  };

  someInstance.pop = function() {
    var element = Object.keys(storage).pop()

    delete storage[element];
    return element;

  };

  someInstance.size = function() {
    if(Object.keys(storage).length < 0 ){
      return 0;
    }
    return Object.keys(storage).length;
  };

  return someInstance;
};
