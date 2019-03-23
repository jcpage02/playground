const numArr = [2, 5, 7, 6, 17, 18, 13, 12, 31, 36, 27, 24];

// * Find second largest odd or even number in an array
// copy even or odd numbers in new array
// sort array and pull out second to last number
// return a single number
let newNumArr = numArr
  .filter(num => {
    if (num % 2 === 0) {
      return true;
    }
  })
  .sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
  });
console.log(newNumArr);
console.log(newNumArr[newNumArr.length - 2]);

// * Find the first 10 numbers in the Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34



// * Find if a number is prime
// 
