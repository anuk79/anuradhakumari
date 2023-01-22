---
title: ES6 Template literals / strings
author: Anuradha Kumari
published: '2020-11-03'
category: blog
topics: [JavaScript]
excerpt: It is used for string substitution and for creating multiline strings
---

Every year, as the year-end approaches, I try to refresh my knowledge of the technical topics I am working on, and the ones I love. This year too, as November began, so did my refresher journey. I started by going through the JavaScript concepts.

And, I came across **template literals** concept. As a React developer, I have been using this feature extensively and this is certainly one of the most useful features to come in ES6.

> It is used for string substitution and for creating multiline strings.

On further read, I found something called as **tagged templates**. As I never read it before, this intrigued me and I dig deeper to understand its syntax and usage.

## Tagged Templates

Tagged templates are basically a special type of function call where function name is placed before the template string.

### Code Example

``` javascript
function showOrderDetails(stringVals, ...values) {
  /**
  * stringVals contains all the strings in array form,
  * the second onwards parameters of this function contain
  * all the individual string interpolated values
  * and we are gathering them in 'values' using rest operator.
  */
  let resultStr = '';
  for (let i = 0; i < stringVals.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] === "number") {
        resultStr += `$${values[i-1].toFixed(2)}`;
      } else {
        resultStr += values[i-1]
      }
    }
    resultStr += stringVals[i]
  }
  return resultStr;
}

let name = "Anu";
let price = 2500;

showOrderDetails`Congratulations ${name}! Your order for ${price} has been successfully placed`

/** output ->
Congratulations Anu! Your order for $2500.00 has been successfully placed
*/
```

### Usage

Tagged template is such a powerful concept, and can be used for a wide range of scenarios, like formatting, localization, automatic escaping of any interpolated variables, etc.. Checkout the references section to explore more about template literals and tagged templates.

## References

- [MDN documentation on Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Tagged Template Literals by Wes bos](https://wesbos.com/tagged-template-literals)
