function solve(arr) {
  let length = arr.length - 1;
  let [leftSum, rightSum] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][length - i];
  }
  console.log(`${leftSum} ${rightSum}`);
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
