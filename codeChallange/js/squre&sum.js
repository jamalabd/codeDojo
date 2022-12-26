function squareSum(numbers){
    return numbers.map((e) => e ** 2).reduce((a,ce)=> a + ce, 0);
 }

 squareSum([1,2,2]);