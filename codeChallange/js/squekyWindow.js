function sliding(nums, k) {
    // should make it clear that the length of the window is k
    let maxArray = [];
    nums.forEach((e,i) => {
      maxArray.push(Math.max(nums.slice(e[i], e[i + k])))
    });
    return maxArray;
  }


 sliding([1,3,-1,-3,5,3,6,7], 3);