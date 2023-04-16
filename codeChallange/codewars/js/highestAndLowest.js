// In this little assignment you are given a string of space separated numbers,

// and have to return the highest and lowest number.

function highAndLow(numbers){
    // lets turn this into a array
   // lets arrange the array form smalletst to greatest
   const sortedArray = numbers.split(' ').sort((a, b)=> a- b)
   
   const lowHigh =  sortedArray[sortedArray.length - 1] +' '+ sortedArray[0];
   
   console.log(lowHigh)
   
   return lowHigh;
  }

console.log(highAndLow("1 2 3"));