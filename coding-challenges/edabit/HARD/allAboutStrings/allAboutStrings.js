const allAboutStrings = (str) => {
  let array = str.split("");
  let middleTwo = [
    array[Math.floor(array.length / 2) - 1],
    array[Math.floor(array.length / 2)],
  ];
  let middle = array[Math.floor(array.length / 2)];
  let answer = [];
  let idx = 0;

  answer.push(
    array.length,
    array[0],
    array[array.length - 1]
  );

  if (array.length % 2 === 0)
    answer.push(middleTwo.join(""));
  else answer.push(middle);

  for (let i = 0; i < array.length; i++) {
    if (array[1] === array[i]) {
      idx = i;
    }
  }
  if (idx > 1) answer.push(`@ index ${idx}`);
  else answer.push("not found");
  return answer;
};
console.log(allAboutStrings("Science"));
