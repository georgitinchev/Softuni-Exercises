function solve(input) {
  let res = input.sort((a, b) => a - b).slice(0, 2);
  console.log(res.join(" "));
}
solve([30, 15, 50, 5]);
