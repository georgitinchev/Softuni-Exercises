function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  return Math.max(...newArr);
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
// solve([
//   [3, 5, 7, 12],
//   [-1, 4, 33, 2],
//   [8, 3, 0, 4],
// ]);
