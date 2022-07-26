//You are given an array of integers a and an integer k. Your task is to
//calculate the number of ways to pick two different indicies i<j, such that
//a[i]+a[j]%k===0

//a = [1,2,3,4,5]
//k = 3
//solution(a,k)=4

function arrayOfIntegers(a, k) {
  //create an accumulator for pairs
  let pairs = 0;
  //traverse the array with a for loop
  for (let i = 0; i < a.length; i++) {
    //create a second loop to compare the sum of a[i]+a[j]
    for (let j = i + 1; j < a.length; j++) {
      //don't forget i+1 in the second loop
      if ((a[i] + a[j]) % k === 0) {
        //if this equals true increment pairs
        pairs++;
      }
    }
  }
  //return pairs
  return pairs;
}

//don't forget to include all of the arguments when you're looking for data
console.log(arrayOfIntegers([1, 2, 3, 4, 5], 3));
