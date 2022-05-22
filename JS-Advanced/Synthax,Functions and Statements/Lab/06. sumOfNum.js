function solve(a, b) {
  a = Number(a);
  b = Number(b);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
solve("1", "5");
solve("-8", "20");
