(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.firstLast = function(inArray) {
    var first = inArray[0];
    var last = inArray[inArray.length - 1];
    return [first, last];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.firstLast;
  }
})();
