//Edabit solutions
function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

//Edabit Solutions
const centuryFromYear = (year) => Math.ceil(year / 100);

//Edabit Solutions
function centuryFromYear(year) {
  if (year % 100 == 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}
