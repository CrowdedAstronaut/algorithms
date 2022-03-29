function uploadCount(dates, month) {
  let count = dates.filter((date) =>
    date.startsWith(month)
  );
  return count.length;
}
