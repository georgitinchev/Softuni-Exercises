function solve(input) {
  let numOfLines = Number(input.shift());
  let regex = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  let regex2 = /\d+/g;
  let arr = [];

  for (let line of input) {
    let match = line.match(regex);
    if (match) {
      for (let word of match) {
        let digits = word.match(regex2);
        if (digits !== null) {
          console.log(`Product group: ${digits.join("")}`);
        } else {
          console.log(`Product group: 00`);
        }
      }
    } else {
      console.log(`Invalid barcode`);
    }
  }
}
// solve(["6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"])
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
