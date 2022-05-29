function solve(input) {
  let pairs = 0;
  // 1. if index is the same
  // 2. if value is the same
  for (let i = 0; i < input.length; i++) {
    let currArr = input[i];
    let nextArr = input[i + 1];
    if (nextArr == undefined) {
      break;
    }
    for (let j = 0; j < nextArr.length; j++) {
      if (currArr[j] == nextArr[j]) {
        pairs++;
      }
      if (currArr[j] == currArr[j + 1]) {
        pairs++;
      }
    }
  }
  console.log(pairs);
}

solve([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);
