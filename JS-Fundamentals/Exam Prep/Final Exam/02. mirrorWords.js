function solve(input) {
  let regex = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
  let match;
  let regex2 = /[A-Za-z]{2,}/gm;
  let array = [];
  let count = 0;
  let countMirror = 0;
  for (let line of input) {
    match = line.match(regex);
  }
  if (!match) {
    console.log(`No word pairs found!`);
  } else {
    for (let line of match) {
      count++;
      let words = line.match(regex2);

      if (words[0] === words[1].split("").reverse().join("")) {
        array.push(words.join(" <=> "));
        countMirror++;
      }
    }
    console.log(`${count} word pairs found!`);
  }

  if (countMirror == 0) {
    console.log(`No mirror words!`);
  } else {
    console.log(`The mirror words are:`);
    console.log(array.join(", "));
  }
}
solve(["##"]);
solve(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
