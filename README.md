# JavaScript Machine Coding – Daily Practice

This repository contains **daily JavaScript machine coding problems and solutions** to improve problem-solving skills and prepare for **frontend / JavaScript interview rounds**.

## Purpose

* Practice **real-world JavaScript problems**
* Strengthen **core JavaScript concepts**
* Improve **coding speed and structure**
* Prepare for **machine coding interview rounds**

## Topics Covered

* Closures
* Debounce & Throttle
* DOM Manipulation
* Promises & Async/Await
* Event Handling
* Polyfills
* Performance Optimization

## Example

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

## Goal

Practice **one problem daily** to build strong JavaScript fundamentals and improve interview readiness.
