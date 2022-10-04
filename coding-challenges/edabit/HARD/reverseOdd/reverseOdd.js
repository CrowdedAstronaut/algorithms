function reverseOdd(str) {
  let array = str.split(" ");
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0)
      answer.push(array[i].split("").reverse().join(""));
    else answer.push(array[i]);
  }
  return answer.join(" ");
}

console.log(reverseOdd("One two three four"));

const reverseOdd = (str) =>
  str
    .split(" ")
    .map((word) =>
      word.length % 2 ? [...word].reverse().join("") : word
    )
    .join(" ");
