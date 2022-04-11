const deNest = (arr) => [...arr].flat(Infinity)[0];

function deNest(arr) {
  let currentNestedArray = arr;
  let whileController = 1;
  let nestedElement;
  while (whileController) {
    if (Array.isArray(currentNestedArray)) {
      currentNestedArray = currentNestedArray[0];
    } else {
      nestedElement = currentNestedArray;
      whileController = 0;
    }
  }

  return nestedElement;
}
