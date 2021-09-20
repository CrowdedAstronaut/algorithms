
// 5n^3
// //O(n^3)
// 5n^2 + 2n + 10
// //O(n^ 2)
// 1000n
// //O(n)
// 2n + 2
// //O(n)
// 10n^3 + 2n^2 + n + 125
// //O(n^3)
// 1
// //O(1)
// 10,000
// //O(1)

const isBobFirst = people => {
    return people[0] === 'bob';
  }

  //O(1)

  const greetStudents = students => {
    students.forEach(student => {
      console.log('Welcome ' + student.name);
    });
  }
  //O(n)

  const getEducation = homework => {
    while(42 > 16) {
      learn();  // constant time O(1)
    }
  }
  //O(infinity)

  const eatIceCream = iceCream => {
    while(iceCream.length > 0) {
      iceCream.pop();
    }
  }
  //O(n)

  const connect = students => {
    students.forEach((student, i) => {
      students.forEach((otherStudent, j) => {
        if(i != j) student.connections.push(otherStudent.linkedIn)
      });
    });
  }
  //O(n^2)

const wordOccurrence = (word, phrase) => {
let result = 0;
const array  = phrase.split(' ');
for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
    result += 1;
    }
}
return result;
}
  //O(n)?

const isPrime = num => {
if (num == 1 || num == 2) {
    return false;
}
for (let i = 2; i < num - 1; i++){
    if (num % 1 == 0) {
    return false;
    }
}
return true;
}

//O(n!)