function reverseWords(str) {
  let array = str.split(" ");
  let words = array.map((word) => word.split(""));
  let reversed = words.map((char) => char.reverse());
  return reversed.map((word) => word.join("")).join(" ");
}

console.log(
  reverseWords(
    "The quick brown fox jumps over the lazy dog."
  )
);

// const reversedItems = items
//   .map(function iterateItems(item) {
//     return item; // or any logic you want to perform
//   })
//   .reverse();
