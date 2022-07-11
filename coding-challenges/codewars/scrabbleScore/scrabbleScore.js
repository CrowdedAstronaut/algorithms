function scrabbleScore(str) {
  //1. Convert all values to uppercase
  const upperStr = str.toUpperCase();
  //2. Create a dictionary of key/value pairs that are predefined by the problem
  const dic = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  //3. Initialize a variable to hold the value of sum - default is zero
  let sum = 0;
  //4. Loop through the upperStr array checking each character for undefined
  for (let i = 0; i <= str.length; i += 1) {
    if (dic[upperStr.charAt(i)] === undefined) {
      //5. If undefined, add zero to sum
      sum += 0;
    } else {
      //6. Otherwise, add the appropriate value to sum as we compare the input string
      // with our predefined set of key/value pairs
      sum += dic[upperStr.charAt(i)];
    }
  }
  //7. Return sum - could still be zero.
  return sum;
}
