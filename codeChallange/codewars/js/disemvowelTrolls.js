// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  // need a list of vowel to compare them to
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // turn string into array
  let stringToArray = str.split("");
  // compare ech element
  const filterdArray = stringToArray.filter((e) => !vowels.includes(e));
  console.log(filterdArray);
  // turn filtered aray to a sting
  return filterdArray.join("");
}

console.log(disemvowel("This website is for losers LOL!"));

// cleaner
function disemvowel(str) {
  return str
    .split("")
    .filter((e) => !["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(e))
    .join("");
}
