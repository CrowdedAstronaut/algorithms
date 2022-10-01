const antipodesAverage = (a) => {
  const half = Math.floor(a.length / 2);
  // Step 1
  const left = a.slice(0, half);
  const right = a.slice(-half).reverse();

  // Step 2
  const added = left.reduce((s, n, i) => {
    s[i] = left[i] + right[i];
    return s;
  }, []);

  // Step 3
  const divided = added.map((n) => n / 2);

  return divided;
};

const antipodesAverage = (arr) =>
  Array.from(
    { length: arr.length / 2 },
    (_, i) => (arr[i] + arr[arr.length - 1 - i]) / 2
  );

function antipodesAverage(arr) {
  let x,
    y,
    resultArr1 = [],
    resultArr2 = [];
  let leftArr = arr.slice(0, parseInt(arr.length / 2));
  let rigthArr = arr.slice(parseInt(arr.length / 2), arr.length).reverse();
  if (arr.length == 2) {
    return [arr.reduce((a, b) => (a + b) / 2)];
  } else if (arr.length % 2 !== 0) {
    x = parseInt(arr.length / 2);
    y = arr.splice(x, 1);
    for (let i = 0; i < leftArr.length; i++) {
      resultArr1.push((leftArr[i] + rigthArr[i]) / 2);
    }
    return resultArr1;
  } else if (arr.length % 2 === 0) {
    for (let i = 0; i < leftArr.length; i++) {
      resultArr2.push((leftArr[i] + rigthArr[i]) / 2);
    }
    return resultArr2;
  }
}
