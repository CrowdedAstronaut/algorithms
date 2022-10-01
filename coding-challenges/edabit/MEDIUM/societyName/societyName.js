function societyName(friends) {
  let array = friends.map((value) => value.slice(0, 1));
  let array2 = array.sort().join("");
  return array2;
}
