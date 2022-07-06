Array.prototype.addAll = function () {
  const arr = this;
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

console.log('After function check', [1, 2, 3, 4].addAll());
