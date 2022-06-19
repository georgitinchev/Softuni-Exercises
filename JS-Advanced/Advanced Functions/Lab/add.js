function solve(n) {
  let num = n;

  return function add(n) {
    return num + n;
  };
}

let add5 = solve(5); // inside there is both a function and a num variable that is kept the first time the whole function is called
console.log(add5); // shows us the function
console.log(add5(2)); // adds 2 to the initial value,  therefore returning 7
console.log(add5(3)); // adds 3 to the initial value, therefore returning 8
