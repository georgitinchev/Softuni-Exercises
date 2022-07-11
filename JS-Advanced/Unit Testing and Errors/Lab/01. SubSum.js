function solve(array, startIndex, endIndex) {
  if (Array.isArray(array) == false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > array.length - 1) {
    endIndex = array.length - 1;
  }
  return array
    .slice(startIndex, endIndex + 1) // slices the array elements from the start index to the end index
    .map(Number) // maps every single element in the array to a number type
    .reduce((acc, x) => acc + x, 0); // reduces the array therefore summing every element with the next
}
