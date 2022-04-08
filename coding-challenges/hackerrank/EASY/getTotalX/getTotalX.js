//Super elegant solution!!!!
function getTotalX(a, b) {
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

const getTotalX = (a, b) => {
  let maxIntA = Math.max(...a);
  let minIntB = Math.min(...b);
  let intsBetweenArrays = [];
  let newArrA = [];
  let finalArr = [];

  if (maxIntA > minIntB) {
    return 0;
  } else {
    for (let i = maxIntA; i <= minIntB; i++) {
      intsBetweenArrays.push(i);
    }
    for (let i = 0; i < intsBetweenArrays.length; i++) {
      if (
        a.every((num) => intsBetweenArrays[i] % num === 0)
      ) {
        newArrA.push(intsBetweenArrays[i]);
      }
    }
    for (let i = 0; i < newArrA.length; i++) {
      if (b.every((num) => num % newArrA[i] === 0)) {
        finalArr.push(newArrA[i]);
      }
    }
  }
  return finalArr.length;
};
