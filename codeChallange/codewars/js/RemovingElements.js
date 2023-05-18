// Take an array and remove every second element from the array.

// Always keep the first element

// and start removing with the next element.

function removeEveryOther(arr) {
  const filtered = arr.filter((item) => arr.indexOf(item) % 2 == 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
