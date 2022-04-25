function abbrevName(name) {
  let wholeName = name.split(" ");
  // code away
  return `${wholeName[0]
    .charAt(0)
    .toUpperCase()}.${wholeName[1]
    .charAt(0)
    .toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"));

function abbrevName(name) {
  let nameArray = name.split(" ");
  return (
    nameArray[0][0] +
    "." +
    nameArray[1][0]
  ).toUpperCase();
}
