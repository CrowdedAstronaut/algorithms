const dayOfProgrammer = (year) => {
  if (
    // (year < 1918 && year % 4 === 0) ||
    year > 1917 &&
    year % 4 === 0 &&
    year % 100 !== 0
  )
    console.log(`12.08${year}`);
};

console.log(dayOfProgrammer(1984));
