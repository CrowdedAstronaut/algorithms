//My solution

function longestString(str1, str2) {
  let unique1 = new Set(str1);
  let unique2 = new Set(str2);
  let longestString = new Set(
    Array.from(unique1).concat(Array.from(unique2)).sort()
  );
  return Array.from(longestString).join("");
}

//Edabit solution
function longestString(str1, str2) {
  return Array.from(new Set(str1 + str2))
    .sort()
    .join("");
}
