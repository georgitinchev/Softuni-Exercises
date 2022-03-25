function oddOccurences(input) {
  // convert input to array
  let words = input.split(" ");
  let result = {};

  for (let word of words) {
    // - count word as lowercase
    word = word.toLocaleLowerCase();
    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  // filter only word that occur and odd number of times
  let filtered = Object.entries(result).filter(([word, count]) => {
    if (count % 2 == 1) {
      return true;
    } else {
      return false;
    }
  });

  // print list of words
  console.log(filtered.map((entry) => entry[0]).join(" "));
}
