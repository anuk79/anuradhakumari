---
title: HTML abbr tag
author: Anuradha Kumari
published: '2020-08-17'
category: TIL
topics: [HTML, Programming]
excerpt: ''
---

Today I learnt that we have a HTML tag for abbreviations. As per MDN,

> The HTML Abbreviation element `<abbr>` represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. If present, title must contain this full description and nothing else.

By default, the text under this element has a style set to

``` css
text-decoration: underline dotted;
```

We can have custom styles on it and can set the text-decoration to `none` to remove that dotted underline on it.

I created a simple [codepen example](https://codepen.io/anuradha15/pen/zYqBBYv) to see how this element works.

## References

- [MDN documentation on abbr tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
