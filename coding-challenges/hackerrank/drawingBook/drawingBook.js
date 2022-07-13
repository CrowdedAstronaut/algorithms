function pageCount(n, p) {
  let page = 0;
  for (let i = 0; i < n; i++) {
    if (i === p) {
      page = i;
    }
  }
  return page;
}
