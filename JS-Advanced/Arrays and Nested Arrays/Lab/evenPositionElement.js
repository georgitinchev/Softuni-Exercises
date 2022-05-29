function solve(matrix) {
  // init counter
  let counter = 0;
  // check rows
  for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
      if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
        counter++;
      }
      if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
        counter++;
      }
    }
  }
  // print result
  console.log(counter);
}
solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log(`-----------------`);
solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
