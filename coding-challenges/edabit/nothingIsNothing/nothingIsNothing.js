function nothingIsNothing() {
  let result = true;
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      result = false;
      break;
    }
  }
  return result;
}

//Edabit solution using .every()
const nothingIsNothing = (...args) => args.every((a) => a);
