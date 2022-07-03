function sortMyString(S) {
  let array = S.split("");
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return `${even.join("")} ${odd.join("")}`;
}
