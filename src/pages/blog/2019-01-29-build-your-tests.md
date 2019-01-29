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

They save time and code. If you have a large object 
