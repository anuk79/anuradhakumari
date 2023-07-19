---
title: caret-color CSS property for editable HTML elements
author: Anuradha Kumari
published: '2020-11-24'
category: TIL
topics: [CSS]
excerpt: 'caret-color: #3ed372;'
---

Today I came across a css property called **caret-color**. It is such a cool little feature, and it is [supported by all major browsers](https://caniuse.com/?search=caret-color).

## What does it do?

This caret-color CSS property **changes the color of the cursor (or caret) in any editable element**, like inputs, text areas, or any contenteditable div.

### Example

PFB the div which is content editable and I have changed its caret-color to be hexcode - #3ed372.

Try editing it and see the magic. <span aria-hidden="true">✨</span>

<div tab-index="0" style="caret-color: #3ed372;" contenteditable>Hello there, I am an editable div. Look at my caret-color. Isn't it pretty?</div>

### Code

``` html
<div 
  tab-index="0"
  style="caret-color: #3ed372;"
  contenteditable>
    Hello there, I am an editable div.
</div>
```

## References

- [tweet of Álvaro Trigo mentioning this property](https://twitter.com/IMAC2/status/1331222842864766980?s=19)
- [css tricks article on caret color](https://css-tricks.com/almanac/properties/c/caret-color/9)
