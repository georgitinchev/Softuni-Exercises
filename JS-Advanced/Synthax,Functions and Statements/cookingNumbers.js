function solve(start, ...args) {
  start = Number(start);
  for (let i = 0; i < args.length; i++) {
    let operation = args[i];
    switch (operation) {
      case "chop":
        start /= 2;
        break;
      case "dice":
        start = Math.sqrt(start);
        break;
      case "spice":
        start += 1;
        break;
      case "bake":
        start *= 3;
        break;
      case "fillet":
        let temp = start * 0.2;
        start -= temp;
        break;
    }
    console.log(start);
  }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
solve(
  "9",
  "dice",
  "spice",
  "chop",
  "bake",

  "fillet"
);
