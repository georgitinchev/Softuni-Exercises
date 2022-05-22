function solve(input) {
  let result = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      result += "* ";
    }
    console.log(result);
    result = "";
  }
}
solve(1);
solve(2);
solve(5);
