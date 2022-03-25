function words(arr) {
  let words = arr.shift().split(" ");
  let result = {};
  for (let word of words) {
    result[word] = 0;
  }
  for (let word of arr) {
    if (result.hasOwnProperty(word)) {
      result[word]++;
    }
  }
  let sorted = Object.entries(result);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let el of sorted) {
    console.log(`${el[0]} - ${el[1]}`);
  }
}
