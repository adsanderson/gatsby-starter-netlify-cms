---
templateKey: blog-post
title: Test code through walking a graph
date: 2019-05-27T17:48:02.508Z
description: 'or: How I learned to walk a graph'
tags:
  - testing
---
### Intro

### A state chart

A UI (or more likely part of a UI) can be represented by a state chart. We can start with a simple a slightly modified version of the [Glass state chart example](https://xstate.js.org/docs/guides/context.html#context) from the XState docs.

![Glass component UI](https://res.cloudinary.com/lazydayed/image/upload/v1559403349/glass-component_rkwr4f.png)

The glass can be filled in stages or emptied in one go. The glass can't be overfilled. The state chart powering this component looks like this:

![State chart used for Glass component](https://res.cloudinary.com/lazydayed/image/upload/v1559318478/glass-machine_eywwpc.png)

We have three states (empty, filling, full), two events to transition between filling and emptying, guards to stop over filling and the ability to empty at any point.

### Walking the graph

### Automation

### These are disconnected?


### Conclusion
