const evenLast = (arr) => {
  let last = arr[arr.length - 1];
  const evenIndex = arr.filter((_, i) => i % 2 === 0);
  return evenIndex.reduce((acc, cv) => acc + cv * last, 0);
};
