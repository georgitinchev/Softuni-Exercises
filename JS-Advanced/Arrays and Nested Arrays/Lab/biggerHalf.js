function solve(arr) {
  arr = arr.sort((a, b) => a - b);
  let length = Math.floor(arr.length / 2);
  for (let i = 0; i < length; i++) {
    arr.shift();
  }
  return arr;
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
