function solve(a, b, c) {
  [a, b, c] = [a.length, b.length, c.length];
  let lengthSum = a + b + c;
  let averageSum = (a + b + c) / 3;
  console.log(lengthSum);
  console.log(parseInt(averageSum));
}
solve("chocolate", "ice cream", "cake");
solve("pasta", "5", "22.3");
