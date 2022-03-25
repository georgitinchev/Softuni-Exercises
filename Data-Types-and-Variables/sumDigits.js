function solve(num) {
  let number = Number(num);
  let sum = 0;

  while (number) {
    // while number still is true therefore num still has digits in it
    sum += number % 10; // sums last digit of number
    number = Math.floor(number / 10); // removes last digit of number
  }
  console.log(sum);
}
