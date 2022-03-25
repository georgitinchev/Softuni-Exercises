function solve(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }
  let subtract = (result, thirdNumber) => result - thirdNumber;
  let result = sum(num1, num2);
  let finalResult = subtract(result, num3);
  console.log(finalResult);
}
