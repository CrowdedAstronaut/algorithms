### Minimal V:

Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that has a missplaced character in order to pass the tests. However, your goal is to submit a function as minimalist as possible.

Write a function that returns the boolean true if the given arrays do not share any numbers, and false otherwise.

Notes
This challenge is translated from Alessandro Manicone's Python's "Minimal Series". The following are his comments and link to the series:

This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
You can find all the exercises in this series over here.

```
function notShare(arr1, arr2) {
    for (let i of arr1) {
      for (let j of arr2) {
        if (i === j) return false;
      }
    }
    return true;
  }
```
