function sort(arr) {
  let result = [];
  arr.sort((a, b) => b - a);

  while (arr.length !== 0) {
    result.push(arr.pop());
    result.push(arr.shift());
  }
  return result;
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sort([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]);
