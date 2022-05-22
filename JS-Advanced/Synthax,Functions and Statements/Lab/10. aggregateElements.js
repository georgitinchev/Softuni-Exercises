function solve(arr) {
  let sum = 0;
  let inverseSum = 0;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    str += arr[i];
    inverseSum += 1 / arr[i];
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(str);
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);
