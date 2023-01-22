---
title: Add resolutions to package.json
author: Anuradha Kumari
published: '2020-08-11'
category: TIL
topics: [npm, tools]
excerpt: ''
---


## What was the issue?

One of the sub-dependencies of my project got updated unintentionally to incorrect version (after running yarn upgrade on a dependency).

To fix this, we had to add a resolution for the sub-dependecy to prevent it from causing any issues the release.
Now, I heard this term **add resolution** for the first time, and had no idea what to do. So I followed the (dev) religious practice and googled about it.

Thankfully, I got the helpful link in the first attempt itself (what a relief!)

## Solution

In a nutshell, I followed below steps:

- Deleted the package lock file created
- Added a resolutions entry in the package.json for the sub-dependency

``` json
  {
    "dependencies": {
      "package-1": "2.3.1",
      "package-2": "3.1.7",
    }
    "resolutions": {
      /** because I upgraded package-1 and it had package-2 as dependency 
        * which got upgraded to a higher version which we did not want */
      "package-2": "3.1.7"  
     }
  }
```

- Re-run yarn upgrade command for package-1, and this time it does not increment the sub-dependency version. Problem solved!

## References

- [Read about selective dependency resolutions here](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/)
