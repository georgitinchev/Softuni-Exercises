//ATCGTTAGGG
function dna(number) {
  let str = "ATCGTTAGGG";
  let counter = 0;
  for (let i = 0; i < number; i++) {
    if (i % 4 == 0) {
      console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`); // indexing the str letters module divided by 10 so that if it gets to 10,it gets reset to the first index
    } else if (i % 4 == 1) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`); // on each satisfied condition add 2 to the counter
    } else if (i % 4 == 2) {
      console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
    } else if (i % 4 == 3) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
    }

    counter += 2;
  }
  //we've basically created two looping mechanisms, one loops through the symbol variations, the other one through the indexes of the str containing our letters
  //we've used the modulo operators to divide the symbol variations until the 4th combo, and the str.index operators until the 10th index
}
