function solve(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}
solve(15, 5);
solve(2154, 458);
