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
The glass can be filled up in stages or emptied in one go. The glass can't be overfilled. It looks like this:

![Glass component UI](https://res.cloudinary.com/lazydayed/image/upload/v1559403349/glass-component_rkwr4f.png)

Here is the state chart powering the component and it's visualisation:

```js
 {
    id: "glass",
    context: {
      amount: 0
    },
    initial: "empty",
    states: {
      empty: {
        on: {
          FILL: {
            target: "filling",
            actions: "addWater"
          }
        }
      },
      filling: {
        on: {
          // Transient transition
          "": {
            target: "full",
            cond: "glassIsFull"
          },
          FILL: {
            target: "filling",
            actions: "addWater"
          }
        }
      },
      full: {}
    },
    on: {
      EMPTY: {
        target: "empty",
        actions: "emptyWater"
      }
    }
  }
```

![State chart used for Glass component](https://res.cloudinary.com/lazydayed/image/upload/v1559318478/glass-machine_eywwpc.png)

We have three states (empty, filling, full), two events to transition between filling and emptying, guards to stop over filling and the ability to empty at any point.

### Graph

It is possible to represent a state chart as a graph. Each state being a vertex and each transition being an edge. A very simple graph that can be generated from the Glass state chart would look like this:

![Graph representation of Glass state chart](https://res.cloudinary.com/lazydayed/image/upload/v1559319236/glass-machine-graph_i44noe.png) 

We can move: 
- from **empty** to **filling**
- from **filling** to **filling**
- from **filling** to **full**
- from **filling** to **empty**
- from **full** to **empty**

We can't move **empty** to **full**, or from **full** to **filling**

### Testing by walking the graph

Walking the graph is the process of moving from vertex to vertex via an edge, or from state to state via events. We want to validate that the component being tested has correctly implemented the behaviour we have defined in our state chart. 

The graph tells us what events are required. We can then look up a state and event; and interact with the component based on this lookup. This is where a library like [Testing library](https://testing-library.com) comes in extremely useful for interactions.

An example of the **empty** to **filling** transition for the Glass component could look like this:

```typescript
const transistion = {
  empty: {
    FILL: container => {
      fireEvent.click(getByText(container, "Fill"));
    }
  }
}
```

Whenever we transition from **empty** to **filling** via a **FILL** event. The component should find the button that says "Fill" and click it.

The next step is then to validate that the state (and/or context) is correct. Again using Testing library we can check that the component has updated correctly.

```typescript
expect(queryByTitle(container, "The glass is about a quarter full")).toBeTruthy();
```
### Automation

### These are disconnected?


### Conclusion
