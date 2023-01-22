---
title: How to add RSS feed to slack channels
author: Anuradha Kumari
published: '2021-06-15'
category: TIL
topics: [rss, slack]
excerpt: /feed <url of feed>
---

Today I learned that we can subscribe to RSS feeds in slack itself and we can create good channels with quality content right there.

Below steps show how we can work with RSS feeds in slack:

## To add a feed

`/feed <url of feed>`

For example:
`/feed https://www.a11yproject.com/feed/feed.xml`

## To check which feeds are added currently

`/feed list`

It lists all feeds along with their IDs - this ID is very useful if we want to remove any particular feed

## To remove any feed

`/feed remove 'ID of that feed which we can get from list above'`

Reference: [How to geek blog](https://www.howtogeek.com/709819/how-to-send-rss-feeds-to-a-slack-channel/)
