const compact = (arr) => {
  return arr.filter(
    (item) =>
      item !== 0 &&
      item !== false &&
      item !== null &&
      item !== NaN &&
      item !== undefined &&
      item !== ""
  );
};

function compact(arr) {
  return arr.filter((el) => el);
}
