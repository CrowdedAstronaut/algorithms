function revrot(str, sz) {
  let array = [...str];
  let chunks = [];
  let cubes = [];
  for (let i = 0; i < array.length; i + sz) {
    let chunk = array.splice(0, sz);
    chunks.push(chunk);
    for (let j = 0; j < chunks.length; j++) {
      let cube = chunks[j].map((char) => Number(char) * Number(char));
      cubes.push(cube);
    }
  }
  return cubes;
}

console.log(revrot("123456987654", 6));

// while (array.length > sz) {
//   chunk = array.splice(0, sz);
//   array - chunk;
// }
// return array;
