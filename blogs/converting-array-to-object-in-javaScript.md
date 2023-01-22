---
title:  Converting array to object in JavaScript
author: Anuradha Kumari
published: '2020-09-18'
category: TIL
topics: [JavaScript]
excerpt: ''
---

Today I came across a use case where-in I needed to convert and Array into an Object for one of my tasks. I found many solutions for it on google, some of them are listed below for sample array of

``` javascript
var arr = [ 
  { color: 'purple' }, 
  { color: 'green'}, 
  { color: 'yellow' } 
]; 
```

When we need index as the key for the resulting object, we can use any of following approach:

``` javascript
// ES6
var obj = { ...arr };

or

// ES5
var obj = Object.assign({}, arr);

or

var obj = {};
arr.reduce(function(obj, item, index, arr) {
  obj[index] = item;
  return obj;
}, {})

/** result -> 
{
  0: {color: "purple"}
  1: {color: "green"}
  2: {color: "yellow"}
}
*/ 
```

When we need any custom as the key for the resulting object, we can use any of following approach:

``` javascript
var obj = Object.assign(
{},
...arr.map(val => ({ 
  [val.color]: val 
}))
);

or

var obj = {};
arr.reduce(function(obj, item, index, arr) {
obj[item.color] = item;
return obj;
}, {});

/** result -> 
{
  'purple': {color: "purple"}
  'green': {color: "green"}
  'yellow': {color: "yellow"}
}
*/
```

## References

- [Stackoverflow](https://stackoverflow.com/questions/4215737/convert-array-to-object)
