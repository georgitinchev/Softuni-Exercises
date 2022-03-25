function charactersInRange(char1, char2) {
  let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let charsInRangeArray = [];

  function solve(a, b, c) {
    for (let i = startChar + 1; i < endChar; i++) {
      charsInRangeArray.push(String.fromCharCode(i));
    }
    console.log(charsInRangeArray.join(" "));
  }

  let final = solve(startChar, endChar, charsInRangeArray);
}
