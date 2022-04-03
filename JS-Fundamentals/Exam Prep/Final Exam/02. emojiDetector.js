function solve(input) {
  let regexForNum = /\d+/gm;
  let regexForEmojis = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/gm;
  let arrayForEmWithoutSimbol = [];
  let sum = 0;
  let obj = {};
  let coolness = [];
  let emojisMatch;
  let coolTresholds;
  let count = 0;
  for (let line of input) {
    let matches = line
      .match(regexForNum)
      .map((element) => element.split(""))
      .flat();
    matches = matches.map(Number);
    if (matches !== null) {
      coolTresholds = matches.reduce((sum, num) => sum * num);
      console.log(`Cool threshold: ${coolTresholds}`);
      emojisMatch = line.match(regexForEmojis);
    }
    if (emojisMatch) {
      emojisMatch.forEach((element) => {
        return arrayForEmWithoutSimbol.push(
          element.substring(2, element.length - 2)
        );
      });

      for (let i = 0; i < arrayForEmWithoutSimbol.length; i++) {
        count++;
        sum = arrayForEmWithoutSimbol[i]
          .split("")
          .map((x) => x.charCodeAt(0))
          .reduce((a, b) => a + b);
        coolness.push(sum);
      }
      console.log(`${count} emojis found in the text. The cool ones are:`);
      coolness.forEach((sum) => {
        let index = coolness.indexOf(sum);
        obj[emojisMatch[index]] = sum;
      });
      Object.entries(obj).forEach((element) => {
        if (element[1] >= coolTresholds) {
          console.log(`${element[0]}`);
        }
      });
    }
  }
}

solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley This includes 3 **Tigers, 1 ::Elephant:, 12 **Monk3ys, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning **Shy",
]);
//solve(['go! The -th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'])
// solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])

// Emoji is valid when:
// 1. Surrounded by 2 characters, either "::" or "**"
// 2. is atleast 3 characters long (without symbols)
// 3. starts with a capital letter
// 4. continues with lowercase letters only
