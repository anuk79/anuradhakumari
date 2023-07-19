---
title: Hide sourcemap for apps deployed on netlify
author: Anuradha Kumari
published: '2021-07-04'
category: TIL
topics: [Web Development, Netlify]
excerpt: GENERATE_SOURCEMAP=false
---

By default, when we deploy our websites to netlify or similar platforms, the source code can be seen in the **sources** tab of devtools.

If you want to hide it from the users, you can do that by adding a flag to **.env** file in the project root:

``` bash
GENERATE_SOURCEMAP=false
```
