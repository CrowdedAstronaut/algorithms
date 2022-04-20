function amplify(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    let j = i;
    if (i % 4 === 0) {
      j *= 10;
    }
    array.push(j);
  }
  return array;
}

//nice solution using map
const amplify = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result.map((x) => (x % 4 == 0 ? x * 10 : x));
};
