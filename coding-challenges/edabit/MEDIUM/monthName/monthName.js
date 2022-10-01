function monthName(num) {
  const date = new Date();
  date.setMonth(num - 1);
  return date.toLocaleString("en-US", {
    month: "long",
  });
}

function monthName(num) {
  const mapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return mapping[num];
}

function monthName(num) {
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthArray[num - 1];
  return month;
}
