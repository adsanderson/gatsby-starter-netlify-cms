---
templateKey: blog-post
title: What happens when I only want model-based tests
date: 2019-05-11T10:29:52.148Z
description: 'or: How I tried to stretch MBT to it''s limits'
tags:
  - testing
  - model-based testing
---
Model-based testing (with [XState](https://xstate.js.org) has the potential to be an extremely powerful testing tool. Conceptually it is very new to me so trying to work out how to best fit it into a testing profile for an application requires exploration.

This post will be about exploring the idea "I only want model-based tests". 

### The simplest starting point

What is a simple application that could be test with just model-based testing. Two states, with one action to switch from the initial state to the second state. Just a console output to say what the state is. 

```js
{
  id: 'basic',
  initial: 'start',
  states: {
    start: {
      on: { COMPLETE: 'end'}
    },
    end: {}
  }
}
```
