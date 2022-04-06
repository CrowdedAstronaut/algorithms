function afterNMonths(year, months) {
  let years = months / 12;
  return !year
    ? "year missing"
    : !months
    ? "month missing"
    : Number((year + years).toFixed(0));
}
