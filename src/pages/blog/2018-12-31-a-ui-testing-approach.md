---
templateKey: blog-post
title: A UI testing approach
date: 2018-12-31T13:41:45.250Z
description: 'or: How I wrote the same 3 tests over and over again'
tags:
  - Develoment testing
---
We are going to look at one way of structuring an app to help make your testing life easier. 

### The architectural building block

At a high level this is the fundamental rule that we are trying to followin the architecture of our application:

```js
const updatePipeline = evt => updateUi(updateState(evt.detail.action))
$el.addEventListener('a-custom-event', updatePipeline);
```

or in a proposed pipeline style:

```js
const updatePipeline = evt => 
  evt.detail.action
  |> updateState
  |> updateUi

$el.addEventListener('a-custom-event', updatePipeline);
```

Lets break down what is happening above: we start with an event, that calls the `updatePipeline` function. The `updatePipeline` function starts by taking some data from the event and updating the state. 

This can follow a reducer pattern `state -> action -> state`. We have and initial state, we pass in our action and we get a new state at out the other side.

Once the state is updated, we then update our UI with the new state. This can be done by hand, and sometimes that is the best approach. In most circumstance this is where a state driven declarative UI library or framework should be used (As of writing this I would recommend Preact, lit-html, Svelte or HyperHTML as high quality **light** approaches).

### What this looks like

At it's core there are three packages that makeup the application. A UI update module, that is responsible for taking the state and updating the UI based on the state. Generally there needs to be a DOM element to bind the UI too. The signature of this function should look something like `DOMElement -> State -> void` The function would not return anything

### Testing the events

### The second test

### The final test

### Testing tools
