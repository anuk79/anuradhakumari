---
title: Link/unlink repositories using Yarn
author: Anuradha Kumari
published: '2021-05-30'
category: TIL
topics: [yarn]
excerpt: yarn link
---

- Run command `yarn link` in the repositories which we want to link, let say repo1.
- Run command `yarn link repo1` in the repository where we want to link *repo1*.
- Run command `yarn unlink repo1` if we want to unlink the repository.

Also, we need to run yarn install after unlinking any repository so that it can fetch it from the packages now.
