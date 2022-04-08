function gradingStudents(grades) {
  // Used map high order array method to single out each element in array
  return grades.map((n) => {
    // find the difference after division with 5
    let diff = 5 - (n % 5);
    // make our test cases and add the diff if condition is true
    if (diff < 3 && n >= 38) {
      n += diff;
    }
    return n;
  });
}

//Another internet solution using .map()
function gradingStudents(grades) {
  return grades.map(function (grade) {
    return grade >= 38 && grade % 5 >= 3
      ? grade + 5 - (grade % 5)
      : grade;
  });
}
