function solve(num) {
  let res = "";

  function concat(a) {
    for (let i = 1; i <= num; i++) {
      res += num + " ";
    }
  }

  function logging(a) {
    for (let i = 1; i <= num; i++) {
      console.log(`${res}`);
    }
  }

  let concattingToRes = concat(num);
  let final = logging(num);
}
