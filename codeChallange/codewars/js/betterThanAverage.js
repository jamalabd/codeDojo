function betterThanAverage(classPoints, yourPoints) {
  let sumOfArray =  classPoints.reduce((acc, cur) => acc + cur) + yourPoints;
  const numberOfclassPoints = classPoints.length + 1;
  const adverage = (sumOfArray / numberOfclassPoints == 0) ? 0 : sumOfArray / numberOfclassPoints ;
  
  if(yourPoints > adverage){
    return true;
    } else {
      return false;
    }
}


// or 

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }
  console.log(betterThanAverage([2, 3], 5))