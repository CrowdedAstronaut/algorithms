function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split("");
  numbers.forEach((n) => {
    arr[arr.indexOf("X")] = n;
  });
  return arr.join("");
}

//REGEX Solution
function formatPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');