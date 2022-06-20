function solve(n) {
  let num = n;

  return function add(n) {
    return num + n; // doesn't change the num variable, its always initially 5
  };
}

let add5 = solve(5);
console.log(add5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(49));
