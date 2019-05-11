---
templateKey: blog-post
title: Model based testing - further exploration
date: 2019-05-10T15:10:45.710Z
description: 'or: How I learned I had more questions than answers'
tags:
  - testing
  - model-based testing
---
I started with my initial steps with model based testing here: [First steps in Model-based testing](https://www.adamsanderson.co.uk/blog/2019-04-03-getting-ready/).

As I progressed with the exploration I kept finding myself with more and more questions. Trying to find the similarities and differences between a potential [XState](https://xstate.js.org) approach and [Graphwalker](http://graphwalker.github.io) progress slowed. To break through the sense of feeling overwhelmed; this post is to break down those questions to help focus and drive towards answers.

### XState, levels and scope

The first question I'm trying to figure out is the scope of model-based testing. A lot of my understanding has come from graphwalker but in many ways I think the component model in web development could give you a lot more fine grained control over the model that is under test.

We can create a state machine with XState and then implement it in a component.


### Config, machines and services

Let's start with promises and the generated paths. The paths generated from a state chart can be broken into a series of three stages: `initial state -> event -> final state`. With the first exploration we found that we need to configure a way of validating each state, and a way of triggering events.

The path tells us what event should happen next. So when calling a promise via a service you get these events `done.invoke.promiseName` and `error.execution`.

The problem is we now need to mock out the service, and it



### Context



