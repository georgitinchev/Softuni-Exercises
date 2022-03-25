function solve(num1, num2) {
  function factoriel(num) {
    let answer = 1;
    if (num == 0 || num == 1) {
      return answer;
    } else {
      for (let i = num; i >= 1; i--) {
        answer = answer * i;
      }
      return answer;
    }
  }

  let factoriel1 = factoriel(num1);
  let factoriel2 = factoriel(num2);

  function divide(n, j) {
    let result = n / j;
    console.log(result.toFixed(2));
  }

  let final = divide(factoriel1, factoriel2);
}
