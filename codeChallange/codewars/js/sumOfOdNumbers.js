function rowSumOddNumbers(n) {
	// first we generate an array of the odd numbers in that row
  const firstNum = (n * n) - (n - 1); // our starting point.
  
  let sum = [];
  let count = 1; // our anchor, or our stopping point.
  for (let i = firstNum; count <= n; i+=2) {
  count++;
  sum.push(i);
}
// then we ad all the elements of that array;
sum = sum.reduce((a,b)=> a + b);
console.log(sum)
return sum;
}
console.log(rowSumOddNumbers(42));