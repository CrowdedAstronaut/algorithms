function prefixPalindrome(s) {
  //maybe recursion solution???

  //create empty array
  let empty = ["a", "aa", "aaa", "codec"];
  let arrayOfArrays = [];
  let array = s.toLowerCase().split("");
  //   console.log(s === array.reverse().join(""));
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {}
    //start pushing characters
    empty.push(array[i]);
    if (empty.join("") === empty.reverse().join(""))
      //   arrayOfArrays.push(empty);
      console.log(empty);
    // for (let j = array.length - 1; j > array.length; j--) {
    //   console.log(array[i]);
    // }
  }
  return arrayOfArrays.join("");
}

console.log(prefixPalindrome("aaacodec"));
