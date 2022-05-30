function solve(arr) {
  arr.sort(twoCritSort);
  return arr.join("\n");
  function twoCritSort(current, next) {
    if (current.length === next.length) {
      return current.localeCompare(next);
    }
    return current.length - next.length;
  }
}
solve(["alpha", "beta", "gamma"]);
console.log(solve(["Isaac", "Theodor", "Jack", "Harrison", "George"]));
solve(["test", "Deny", "omen", "Default"]);
