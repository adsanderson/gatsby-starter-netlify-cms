---
templateKey: blog-post
title: Build your tests
date: 2019-01-29T20:10:05.198Z
description: 'or: How I learned to get the most out of copying'
tags:
  - development
  - testing
---
When writing automated tests you end up with a lot of similar code. Patterns repeat with slight variations each time. One of the tools I have found that helps a huge amount with tests are data builders.

It was this series of [blog posts](http://blog.ploeh.dk/2017/08/15/test-data-builders-in-c/) by Mark Seemann that introduced me to the idea of data builders.

### What is a data builder?

A data builder is a "copy with" tool. The databuilder "copies" an object and then can update specified properties "with" new data. The pattern is simple enough to achieve with modern JavaScript and rest parameters.

```js
const baseObj = {
  updatedTimes: 0
}
const newObj = {...baseObj, updatedTimes: 1}
```

### Why are they useful

They save time and code. Lets start with a simple function `bigObject -> result`. We pass our bigObject into the function and get a result at the end. To test this we would have something like this:

```JavaScript
const bigObject = { //... lots of parameters }
expect(foo(bigObject)).toBe(expectedResult);
```

When we get to our second test we start by creating another `bigObject` this time with one parameter different. Now we are in spot the difference territory, the two tests look almost identical but with one small difference in the `bigObject`.   

```JavaScript
const bigObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "not so different",
  isBig: true 
}
const secondBigObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "difference",
  isBig: true 
}

expect(foo(bigObject)).toBe(expectedResult);
expect(foo(secondBigObject)).toBe(secondExpectedResult);
```

Lets see how this looks when we use our simple copy with technique:

```JavaScript
const baseObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "not so different",
  isBig: true 
}
const secondBigObject = { 
  ...baseObject,
  subtle: "difference"
}

expect(foo(baseObject)).toBe(expectedResult);
expect(foo(secondBigObject)).toBe(secondExpectedResult);
```

The change is so much clearer to see now. The second test is against the baseObject with a `subtle: "difference"`. 
