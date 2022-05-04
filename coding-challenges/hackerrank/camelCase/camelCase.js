function camelcase(s) {
  // Write your code here
  let count = 1;
  let array = s.split("");
  for (let i = 0; i <= array.length; i++) {
    const element = array[i];
    if (element >= "A" && element <= "Z") {
      count += 1;
    }
  }
  return count;
}

camelcase("saveChangesInTheEditor");
