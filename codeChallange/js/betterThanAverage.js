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

  console.log(betterThanAverage([2, 3], 5))