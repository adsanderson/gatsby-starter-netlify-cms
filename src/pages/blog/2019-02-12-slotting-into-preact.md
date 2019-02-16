---
templateKey: blog-post
title: Slotting into Preact
date: 2019-02-12T11:43:03.517Z
description: 'or: How I learned the root of all things'
tags:
  - development
  - web components
  - preact
---
Preact is an excellent UI library and web components make a fantastic building block. But, I have found one stumbling block that relates to the `<slot>` element in browsers without the shadow DOM.

### The issue
You create your custom element,

```html
<horrible-pulse-effect>
  <h1>Why!!!!!!!</h1>
</horrible-pulse-effect>
``` 

### Why it happens

Diffing against the actual DOM.

### The solution

`shouldComponentUpdate`

rerender from scratch
