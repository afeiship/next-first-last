# next-first-last
> Get first/last element from array

## install:
```bash
npm install -S afeiship/next-first-last --registry=https://registry.npm.taobao.org
```

## usage:
```js
var arr = [1, 2, 3];
var rs = nx.firstLast(arr);
// [1,3]
```

## es5/6 ticks:
- http://www.codeblocq.com/2016/05/Get-the-last-element-of-an-Array-in-JavaScript/

```js
// es6 destruct:
let arr = [1,2,3]
let { 0:first, length, [length-1]:last } = arr;

//es5: get last, but slow:
var last = arr.slice(-1)[0]
```

## get last benchmark:
```js
var times = 10000000

console.group('slice')
console.time('array slice');
for(var i = 0; i < times; i = i + 1) {
  var array = [1,2,3,4,5,6];
  var val = array.slice(-1)[0];
}
console.timeEnd('array slice');
console.groupEnd('slice')

console.group('array-index')
console.time('array index');
for(var i = 0; i < times; i = i + 1) {
  var array = [1,2,3,4,5,6];
  var val = array[array.length - 1];
}
console.timeEnd('array index');
console.groupEnd('array-index');
```
