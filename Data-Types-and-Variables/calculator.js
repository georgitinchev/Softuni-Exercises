function calculator(num1, op, num2) {
  if (op == "+") {
    console.log((num1 + num2).toFixed(2));
  } else if (op == "-") {
    console.log((num1 - num2).toFixed(2));
  } else if (op == "/") {
    console.log((num1 / num2).toFixed(2));
  } else if (op == "*") {
    console.log((num1 * num2).toFixed(2));
  }
}
