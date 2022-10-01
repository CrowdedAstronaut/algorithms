//My solution
function objectToArray(obj) {
  let array = Object.keys(obj).map((key) => [key, obj[key]]);
  return array;
}

//Edabit Solution
function objectToArray(obj) {
  const myArray = Object.entries(obj);
  return myArray;
}
