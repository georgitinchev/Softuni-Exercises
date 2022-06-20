function createFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) {
    return symbol + " " + result;
  } else {
    return result + " " + symbol;
  }
}
let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
function solve(a, b, c, d) {
  return d.bind(undefined, a, b, c);
}
