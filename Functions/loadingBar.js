function solve(num) {
  let percentageArr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  let divided = num / 10;

  function percentage(a) {
    percentageArr.splice(0, divided);
    for (let i = 1; i <= divided; i++) {
      percentageArr.unshift("%");
    }
    percentageArr.unshift("[");
    percentageArr.push("]");
    if (num < 100 && num >= 0) {
      console.log(`${num}% ${percentageArr.join("")}\nStill loading...`);
    } else if (num === 100) {
      console.log(`${num}% Complete!\n${percentageArr.join("")}`);
    }
  }

  let final = percentage(num);
}
