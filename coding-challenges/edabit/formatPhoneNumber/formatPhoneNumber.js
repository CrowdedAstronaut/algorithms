function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split("");
  numbers.forEach((n) => {
    arr[arr.indexOf("X")] = n;
  });
  return arr.join("");
}

//REGEX Solution
function formatPhoneNumber(numbers) {
  return numbers
    .join("")
    .replace(/(...)(...)(.*)/, "($1) $2-$3");
}

function formatPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join("");
  const middle = numbers.slice(3, 6).join("");
  const last = numbers.slice(6).join("");
  return `(${first}) ${middle}-${last}`;
}
