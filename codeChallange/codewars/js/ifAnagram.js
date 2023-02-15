var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    console.log(test)
    console.log(original)
    if(test == original){
      return true;
      console.log('its true') 
    } else {
      return false
      console.log('its false') 
    }
  };

  
console.log(isAnagram("Buckethead", "DeathCubeK"));