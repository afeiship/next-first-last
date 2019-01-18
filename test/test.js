var nx = require('next-js-core2');
require('../src/next-first-last');

test('nx.firstLast', function() {
  var arr = [1, 2, 3];

  var rs = nx.firstLast(arr);

  expect(rs[0]).toBe(1);
  expect(rs[1]).toBe(3);
});
