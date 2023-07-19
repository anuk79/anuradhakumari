---
title: Figure tags in HTML5
author: Anuradha Kumari
published: '2020-11-02'
category: blog
topics: [HTML]
excerpt: Using a figure tag adds semantic to our elements and hence helps with accessibility and SEO
---

## Introduction

Today I stumbled across `figure` tag which is one of the lesser known semantic tags which got introduced in HTML5. It tells the browser that `figure` is a container that holds elements that have a relation to each other.

While most common examples use an image to explain this tag, it's worth noting that it does not need to contain only image.  It can also contain tables, audio, video, etc.

## Example without using Figure tag

To explain this, I am also going to use an image element with some related text content.

Let's say we have an image and some text content that associates with it (some kind of caption). One way of creating it could be using image and paragraph elements wrapped within a div container.

### HTML Code

``` html
  <div>
    <img src="https://c4.wallpaperflare.com/wallpaper/392/664/919/toothless-night-fury-how-to-train-your-dragon-how-to-train-your-dragon-2-wallpaper-preview.jpg" alt="Night fury dragon" width="300" height="200" />
    <p> 
      How to train your dragon is one of my favorite movies and Night fury is the most adorable 
      and amazing dragon I have ever met (through the movie, of course)
    </p>
</div>
```

**And the result is as shown below:**

<div class="figure-ex">
  <div>
    <img src="https://c4.wallpaperflare.com/wallpaper/392/664/919/toothless-night-fury-how-to-train-your-dragon-how-to-train-your-dragon-2-wallpaper-preview.jpg" alt="Night fury dragon" width="300" height="200" />
    <p>
      How to train your dragon is one of my favorite movies and Night fury is the most adorable and amazing dragon I have ever met (through the movie, of course)
    </p>
  </div>
</div>

## Example using Figure tag

Now let's use figure element and see how we can get the same results.

### HTML5 Code

``` html
  <figure>
    <img src="https://c4.wallpaperflare.com/wallpaper/392/664/919/toothless-night-fury-how-to-train-your-dragon-how-to-train-your-dragon-2-wallpaper-preview.jpg" alt="Night fury dragon" width="300" height="200" />
    <figcaption> 
      How to train your dragon is one of my favorite movies and Night fury is the most adorable and amazing dragon I have ever met (through the movie, of course)
    </figcaption>
</figure>
```

**And, the result is as shown below:**
        <div class="figure-ex">
          <figure>
    <img src="https://c4.wallpaperflare.com/wallpaper/392/664/919/toothless-night-fury-how-to-train-your-dragon-how-to-train-your-dragon-2-wallpaper-preview.jpg" alt="Night fury dragon" width="300" height="200" />
    <figcaption>
      How to train your dragon is one of my favorite movies and Night fury is the most adorable and amazing dragon I have ever met (through the movie, of course)
    </figcaption>
</figure>
</div>

## Comparing results

Now, if we compare results, we see same visual result, but using a figure tag adds the semantic to our elements and hence helps with accessibility and SEO.

You can also check [Codepen for above example](https://codepen.io/anuradha15/full/PozeBNQ).

## References

- [Why use the figure element?](https://forum.freecodecamp.org/t/why-use-the-figure-element/315116/3)
