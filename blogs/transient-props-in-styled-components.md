---
title: Transient props in Styled Components
author: Anuradha Kumari
published: '2020-08-26'
category: TIL
topics: [Styled Components]
excerpt: ''
---

Today I learned about **transient props** in [Styled Components](https://styled-components.com/).

## What issue it resolves?

When creating a styled component with a prop which is similar to an existing HTML attribute, that prop gets passed through to the underlying DOM element as a corresponding attribute. We could handle it by renaming that prop to not match any existing HTML attribute.

This new props now enables us to pass the same props with `$` prefixed to them, and styled components will know not to pass these to the rendered DOM element nor pass it further down the component hierarchy.

## References

- [Styled component github issues](https://github.com/styled-components/styled-components/issues/3220)
- [Read the detailed proposal on Medium](https://medium.com/@probablyup/introducing-transient-props-f35fd5203e0c)
