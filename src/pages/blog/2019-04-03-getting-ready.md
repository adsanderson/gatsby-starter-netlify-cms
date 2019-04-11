---
templateKey: blog-post
title: Adventures in Model-based testing
date: 2019-04-03T10:29:44.879Z
description: 'or: How I learned to generate tests'
tags:
  - model-based testing
---
Model-based testing is the process of creating an abstract version of the behaviour of a system. Then executing the model so it is run over an implementation. Then validating that the system under tests behaves the same way as the model.

Before we start there are multiple types of model-based test. The one we will explore is state chart powered model-based testing. This is an early exploration of the ideas around model based testing and as such will develop over time.

I will start by introducing the pieces of a model-based test. Then put those together in a workflow. Then finally explain what has been tested.

### What do we need for a model-based test

To write a model based test for a component, you need a state chart. This state chart will define the states of your component, and the events that transfer between the states.  

![light machine state chart, going from green to amber to red with switch events and a stop event to go straight to red](https://res.cloudinary.com/lazydayed/image/upload/v1554714019/Devtings/light-machine.png "Light state chart")

Then from the state chart you are able to generate a series of paths, that step through through each state via an action.

The next piece is to validate that you are in the correct state, for a component this maybe asserting that the correct information is displayed on the page.

Then what is required is a way of interacting with
