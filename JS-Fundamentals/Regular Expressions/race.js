function solve(input) {
    let racers = {}; // create a racers object to store the values
    let names = input.shift().split(", "); // shift the first element from input arr and split by ', ' thats the names array
  
    for (let line of input) {
      // loop around the lines in input
      if (line !== "end of race") {
        // if the line is not end of race, hence if the loop is still going
        let racerName = line.match(/[A-Z]+/gi).join(""); // match anything that starts with a capital letter and all tokens on the right of it
        let distanceInDigits = line.match(/\d/g); // match any digits inside of the current line
        let distance = 0;
  
        distance = distanceInDigits
          .map(Number)
          .reduce((previousValue, currentValue) => previousValue + currentValue); // map each element of the distance array to Number and after that call reduce on it
  
        if (names.includes(racerName)) {
          // if names includes the name matched by the regex
          if (racers.hasOwnProperty(racerName)) {
            // and if the racers object has a key with racerName
            racers[racerName] += distance; // add the distance to racerName
          } else {
            racers[racerName] = distance; // otherwise create the racerName key inside of racers and set it equal to the reduced distance array
          }
        }
      }
    }
    let sortedArray = Object.keys(racers).sort((a, b) => racers[b] - racers[a]); // Since we only need the names for the logging, sort the array of Object.keys by the distance within it
    console.log(
      `1st place: ${sortedArray[0]}\n2nd place: ${sortedArray[1]}\n3rd place: ${sortedArray[2]}` // console log the first three
    );
  }