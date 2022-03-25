function solve(arr) {
  //1. sort an array of numbers
  let result = [];
  let array = arr.sort((a, b) => a - b);
  //2. first element is biggest one, second is smallest one so on and so forth
  while (array.length != 0) {
    result.push(array[array.length - 1]);
    array.pop();
    result.push(array[0]);
    array.shift();
  }
  //3. print elements on one row separated by a single space
  console.log(result.join(" "));
}
