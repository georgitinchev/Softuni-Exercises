function print(num1, num2) {
  let sum = 0;
  let seq = "";
  for (let i = num1; i <= num2; i++) {
    sum += i;
    seq += i + " ";
  }
  console.log(seq);
  console.log(`Sum: ${sum}`);
}
