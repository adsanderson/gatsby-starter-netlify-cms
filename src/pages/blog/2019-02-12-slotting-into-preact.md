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



### Why it happens

When you use a web component using shadow DOM and has a slot you would write something like this:

![Initial DOM code](https://res.cloudinary.com/lazydayed/image/upload/v1550479938/Devtings/preactcustomelements/diffing-1.png "Initial DOM code")

The next step is for the web components polyfill to initialise the custom element and add in the additional DOM. 

![Initial DOM code](https://res.cloudinary.com/lazydayed/image/upload/v1550479938/Devtings/preactcustomelements/diffing-2.png "Initial DOM code")

The polyfill then moves the child elements fro the custom element node and places them inside the additional DOM of the custom element.

![Initial DOM code](https://res.cloudinary.com/lazydayed/image/upload/v1550479938/Devtings/preactcustomelements/diffing-3.png "Initial DOM code")

When an update occurs in Preact this is where the issue occurs. Preact will diff it's derived V-DOM against the actual DOM and find that the the custom elements child content is missing from it's root and will then insert it.

![Initial DOM code](https://res.cloudinary.com/lazydayed/image/upload/v1550479938/Devtings/preactcustomelements/diffing-4.png "Initial DOM code")

What appears in the actual DOM and the screen is the content of the custom element doubling up, usually with different styling.

### The solution(s)

There are a number of ways to stop this occurring. First if you have control over the web component then to try and have slots in the root of the components template. If the content does not need moving then the component and Preact will match in terms of structure.

This is not always possible, your design system button will want to use an actual button under the hood to take advantage of the existing art.



`shouldComponentUpdate`

rerender from scratch
