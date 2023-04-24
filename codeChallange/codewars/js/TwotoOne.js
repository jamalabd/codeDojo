// Take 2 strings s1 and s2 including only letters

// from a to z. Return a new sorted string,

// the longest possible, containing distinct letters - each

// taken only once - coming from s1 or s2.
function longest(s1, s2) {
  // create joined words
  let longString = s1 + s2;
  // turn to an array
  let longestArray = longString.split("");
  // make array unique  and sort
  longestArray = Array.from(new Set(longestArray)).sort().join("");
  return longestArray;
}

console.log(longest("aretheyhere", "yestheyarehere"));
