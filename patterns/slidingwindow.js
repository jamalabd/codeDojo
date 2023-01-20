function sliding(list, n) {
    if (list.length < n) return null;
   
    // We don't need to set this to a min value, because we are immediately
    // establishing a baseline (which may be negative)
    let maxSum = 0;
    
    // Sum the first n elements to establish our baseline.
    for (let i = 0; i < n; i++) {
      console.log(i)
      maxSum += list[i]
    };
   console.log(maxSum) 
    let p1 = 0;
    let p2 = n;
    let tempSum = maxSum;
    
     
    // n = 3
    //    [ 4,  5,  7,   9,   20,  4,   9,   3,   11,   4,   3 ]
    //      p1___________p2
  
    // maxSum: 16
    // tempSum: 16
    
    // Continue until the edge of our window (i.e. p2) reaches the end of the list.
    while (p2 < list.length) {
      // Calculate prospective sum using window edges so that sum includes p2 and excludes p1 values.
      // tempSum =  16  -    4     +    9
      tempSum = tempSum - list[p1] + list[p2];
      // Update condition
      if (tempSum > maxSum) maxSum = tempSum;
      // Slide the window along the list
      p1++;
      p2++;
    }
    
    return maxSum;
  }
  
  sliding([ 4,  5,  7,   9,   20,  4,   9,   3,   11,   4,   3, 3], 3)