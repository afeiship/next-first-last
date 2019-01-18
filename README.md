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
```js
// es6 destruct:
let arr = [1,2,3]
let { 0:first, length, [length-1]:last } = arr;

//es5: get last, but slow:
var last = arr.slice(-1)[0]
```
