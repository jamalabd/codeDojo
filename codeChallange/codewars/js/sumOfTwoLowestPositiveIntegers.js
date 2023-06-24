// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoSmallestNumbers = (numbers) => {
  // get the first lowest number
  const firstLowest = Math.min(...numbers);
  // remove that number
  numbers.splice(numbers.indexOf(firstLowest), 1);
  // now get the second lowest
  const secondLowest = Math.min(...numbers);
  // return the added values
  return firstLowest + secondLowest;
};

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
