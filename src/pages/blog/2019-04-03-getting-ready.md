---
templateKey: blog-post
title: Adventures in Model-based testing
date: 2019-04-03T10:29:44.879Z
description: 'or: How I learned to generate tests'
tags:
  - model-based testing
---
Model-based testing is the process of creating an abstract version of the behaviour of a system. Then executing those behaviours 

Before we start there are multiple types of model-based test. The one we will explore is state chart powered model-based testing. This is an early exploration of the ideas around model based testing and as such will develop over time.

I will start by introducing the pieces of a model-based test. Then put those together in a workflow. Then finally explain what has been tested.

### What do we need for a model-based test

To write a model based test for a component, you need a state chart. This state chart will define the states of your component, and the events that transfer between the states.  

Then from the state chart you are able to generate a series of paths, that step through through each state via an action.

The next piece is to validate that you are in the correct state, for a component this maybe asserting that the correct information is displayed on the page.

Then what is required is a way of interacting with   

 
