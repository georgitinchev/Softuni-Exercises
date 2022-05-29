function solve(arr) {
  let result = [];
  let biggest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum >= biggest) {
      result.push(currentNum);
      biggest = currentNum;
    }
  }
  return result;
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(`---`);
solve([1, 2, 3, 4]);
console.log(`---`);
solve([20, 3, 2, 15, 6, 1]);
