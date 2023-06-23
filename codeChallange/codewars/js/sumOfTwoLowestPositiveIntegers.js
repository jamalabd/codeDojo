// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoSmallestNumbers = (numbers) => {  
  console.log(numbers)
    // remove all negative numbers
    numbers = numbers.filter((num)=> num >= 0);
    console.log(numbers)
    // get the first lowest number 
    const firstLowest = Math.min(...numbers);
    console.log(firstLowest)
    // remove that number 
    numbers = numbers.filter((num)=> num != firstLowest);
    
    // now get the second lowest 
    const secondLowest = Math.min(...numbers);
    console.log(secondLowest)
    return firstLowest + secondLowest; 

  }

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))