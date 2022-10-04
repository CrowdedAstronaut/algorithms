const checkCoupon = (
  enteredCode,
  correctCode,
  currentDate,
  expirationDate
) => {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
};

console.log(
  checkCoupon(
    "123",
    "123",
    "September 5, 2014",
    "October 1, 2014"
  )
);
