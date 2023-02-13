function rowSumOddNumbers(n) {
	// TODO
let sum =[];
 for (let i = 1; i < n; i +=2) {
  console.log(sum.push(i));
}
  let red = sum.reduce((a, b) => a + b);
  console.log(sum)
  console.log(red)
}
console.log(rowSumOddNumbers(20))