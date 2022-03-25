function oddEven(number) {
  let num = number.toString();
  let newArr = [];
  let evenSum = 0;
  let oddSum = 0;

  function solve(a, b, c, d) {
    for (let i = 0; i < num.length; i++) {
      newArr.push(Number(num[i]));
    }
    for (let i = 0; i < num.length; i++) {
      if (newArr[i] % 2 === 0) {
        evenSum += newArr[i];
      } else {
        oddSum += newArr[i];
      }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }

  let final = solve(num, newArr, evenSum, oddSum);
}
