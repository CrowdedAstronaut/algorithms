function divisibleSumPairs(n, k, ar) {
  //   let unique = Array.from(new Set(ar));
  // Write your code here
  let count = 0;
  for (let i = 0; i <= ar.length; i++) {
    for (let j = i + 1; j <= ar.length; j++) {
      const first = ar[i];
      const second = ar[j];
      if ((first + second) % k === 0) {
        count += 1;
      }
      console.log(first, second);
      //   console.log(count);
    }
  }
  return count;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

// let iArray = [1, 2, 3, 6];

// let jArray = [1, 2, 3, 6];
