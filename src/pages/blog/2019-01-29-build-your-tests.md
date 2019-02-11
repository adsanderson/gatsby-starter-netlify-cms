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
  count: 0
}
const newObj = {...baseObj, count: 1}
```

### Find the tree in the forest

Lets start with a simple function `bigObject -> result` we want to test. We pass our bigObject into the function and get a result at the end. To test this we would have something like this:

```js
const bigObject = { //... lots of parameters }
expect(foo(bigObject)).toBe(expectedResult);
```

When we get to our second test we start by creating another `bigObject` this time with one parameter different. Now we are in spot the difference territory, the two tests look almost identical but with one small difference in the `secondbigObject`.   

```js
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

```js
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

### Change happens

Another advantage of copying with our objects is when it comes time to extend or  refactor. Lets say we realise our `isBig` property is not actually boolean, but rather an enumeration. We need to change `isBig: boolean` to `sizeState: "Big" | "Small" | "Relative"`. 

The refactoring of our new object every time would involve changing every object, and making sure that each "true" became "Big" and each "false" became "Small". Having to make a change to every test that uses this object while at the same time that property may not impact on the test is a pain.

In out "copy with" technique world, we change our base object. Then anywhere with isBig different to the base gets updated. 

### As a function

If we want to we can wrap up the data builder into a function, with a builder pattern.

A TypeScript implementation below:

```typescript
type PartialObj<Obj extends { [key: string]: any }> = { [Prop in keyof Obj]?: Obj[Prop] };

function dataBuilderFactory<Obj extends { [key: string]: any }>(obj: Obj) {
    return {
        with: (partial: PartialObj<Obj>) => {
            const updateObj = {
                ...(obj as { [key: string]: any }),
                ...(partial as { [key: string]: any })
            } as Obj;
            return dataBuilderFactory(updateObj);
        },
        build: () => ({ ...(obj as { [key: string]: any }) } as Obj)
    };
}
```
