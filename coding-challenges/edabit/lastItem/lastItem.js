function lastItem(input) {
  if (input.length === 0) {
    return undefined;
  } else {
    return input[input.length - 1];
  }
}

//Edabit Solution
function lastItem(input) {
  return input.slice(-1)[0];
}

//Edabit Solution
const lastItem = (input) =>
  !input ? undefined : input[input.length - 1];
