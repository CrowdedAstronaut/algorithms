### Designing Rugs

Write a function that accepts the width and height (m, n) and an optional parameter s and generates an array with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no parameter is given).
The character passed in through the parameter repeating n times.
Examples

```
makeRug(3, 5) ➞ [
  "#####",
  "#####",
  "#####"
]

makeRug(3, 5, '$')  ➞ [
  "$$$$$",
  "$$$$$",
  "$$$$$"
]

makeRug(2, 2, 'A')  ➞ [
  "AA",
  "AA"
]
```
