const allAboutStrings = (str) => {
  let array = str.split("");
  let middle = [
    array[Math.floor(array.length / 2) + 1],
    array[Math.floor(array.length / 2)],
  ];
  let answer = [];

  answer.push(array.length, array[0], array[array.length - 1]);

  if (array.length % 2 === 0) {
    answer.push(middle.join(""));
  }

  for (let i = 0; i < array.length; i++) {
    if (array[1] === array[i]) {
      answer.push(`@ index ${i}`);
    }
  }
  return answer;
};
console.log(allAboutStrings("LASA"));
