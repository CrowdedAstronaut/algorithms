// complete the function
const solution = (string) => string.replace(/([a-z])([A-Z])/g, "$1 $2");

console.log(solution("camelCasing"));

function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
