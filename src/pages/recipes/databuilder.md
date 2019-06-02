---
templateKey: blog-post
title: Databuilder
date: 2019-06-02T19:42:09.557Z
tags:
  - Testing
---
```typescript

type PartialObj<Obj extends { \[key: string]: any }> = { \[Prop in keyof Obj]?: Obj\[Prop] };



function dataBuilderFactory<Obj extends { \[key: string]: any }>(obj: Obj) {

  return {
    with: (partial: PartialObj<Obj>) => {
      const updateObj = {
      ...(obj as { \[key: string]: any }),
      ...(partial as { \[key: string]: any })
      } as Obj;
      return dataBuilderFactory(updateObj);
    },
    build: () => ({ ...(obj as { \[key: string]: any }) } as Obj)
  };
}

```
