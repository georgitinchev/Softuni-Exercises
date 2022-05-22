function solve(number) {
  number = number.toString();
  let bool = true;
  let sum = 0;
  for (let i = 1; i < number.length; i++) {
    if (number[i] != number[i - 1]) {
      bool = false;
      break;
    }
  }
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(bool);
  console.log(sum);
}
solve(2222222);
solve(1234);
