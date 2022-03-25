function smallestOfThree(num1, num2, num3) {
  function check(a, b, c) {
    if (num1 <= num2 && num1 <= num3) {
      return num1;
    } else if (num2 <= num1 && num2 <= num3) {
      return num2;
    } else if (num3 <= num1 && num3 <= num2) {
      return num3;
    }
  }

  let final = check(num1, num2, num3);

  console.log(final);
}
