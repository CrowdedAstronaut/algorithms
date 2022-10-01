function hashPlusCount(str) {
  let array = str.split("");
  let hashes = 0;
  let pluses = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "#") {
      hashes += 1;
    } else {
      pluses += 1;
    }
  }
  return [hashes, pluses];
}
