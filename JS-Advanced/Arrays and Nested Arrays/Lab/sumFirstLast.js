function solve(arr) {
  let [a, b] = [arr[0], arr[arr.length - 1]];
  a = Number(a);
  b = Number(b);
  console.log(a + b);
}
solve(["20", "30", "40"]);
