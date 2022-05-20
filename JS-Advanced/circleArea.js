function solve(input) {
  if (typeof input == "number") {
    let radius = input * input * Math.PI;
    console.log(radius.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}
solve(0);
