---
title: How to open multiple instance of OBS on Mac
author: Anuradha Kumari
published: '2023-01-08'
category: TIL
topics: [OBS, Configuration]
excerpt: open -n -a OBS.app --args -multi
---

Recently I had to record two separate files for one of my conference talks - the camera and audio to one output and the screen recording to another. It was so difficult for me to open two instances of OBS on my Mac machine (M1 pro, 16 GB variant). So I had to try multiple suggestions from the internet and found a one-liner command to run in the terminal which works. It will ask if you want to open another instance, since it detects that one version of OBS is already running, you have to say yes because the intention is to open two instances.

``` bash
open -n -a OBS.app --args -multi
```

I found the answer on [OBS forum](https://obsproject.com/forum/threads/is-is-possible-to-run-multipule-instances-on-mac-os-x.35645/). Thanks Daniel.

Refer [launch parameters](https://obsproject.com/eu/kb/launch-parameters) to explore more parameters.
