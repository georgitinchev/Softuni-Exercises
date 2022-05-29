function solve(arr, str1, str2) {
  let [start, end] = [arr.indexOf(str1), arr.indexOf(str2)];
  let newArr = arr.slice(start, end + 1);
  return newArr;
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
