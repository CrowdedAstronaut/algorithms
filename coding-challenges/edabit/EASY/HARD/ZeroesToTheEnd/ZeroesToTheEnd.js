function zeroesToEnd(a) {
  let len = a.length;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 0) {
      a.splice(i, 1);
      i--;
    }
  }
  a = [
    ...a,
    ...Array.from(
      { length: Math.abs(a.length - len) },
      () => 0
    ),
  ];
  return a;
}

console.log(zeroesToEnd([6, 2, 0, 0, 4, 0, 5]));
