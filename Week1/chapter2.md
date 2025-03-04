# Chapter 2: Rendering UI & The DOM

## What is the DOM?

The Document Object Model (DOM) is a tree-like representation of an HTML page. It allows JavaScript to dynamically update web pages.

## Key Concepts

- The browser converts HTML into the DOM Tree.
- JavaScript can manipulate the DOM to add, remove, or update elements.
- Example:

  ```js
  document.getElementById("app").innerHTML = "<h1>Hello World</h1>";
