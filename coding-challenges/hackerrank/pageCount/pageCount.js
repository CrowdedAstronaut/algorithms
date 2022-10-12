function pageCount(n, p) {
  let empty = [];
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const pages = range(0, n, 1);
  for (let i = 0; i < pages.length; i += 2) {
    empty.push([pages[i], pages[i + 1]]);
  }
  console.log(empty);
}

pageCount(6, 2);
