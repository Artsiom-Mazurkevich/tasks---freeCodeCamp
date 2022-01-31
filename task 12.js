function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  let result = "";
  switch(val) {
    case 1: 1
    case 2: 2
    case 3: 3
      result = "Low";
      break;
    case 4: 4
    case 5: 5
    case 6: 6
      result = "Mid";
      break;
    case 7: 7
    case 8: 8
    case 9: 9
      result = "High";
      break;
  }


    // Only change code above this line
    return result;
  }

  sequentialSizes(1);