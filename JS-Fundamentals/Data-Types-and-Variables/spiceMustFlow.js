function spicesMustFlow(startingYield) {
  let spiceExtracted = 0; // initiating the extracted spices amount to a number 0;
  let dayCounter = 0; // initiating the variable for the days in which the mine has worked while (stratingYield >= 100)

  while (startingYield >= 100) {
    dayCounter++; // incrementing 1 day to the end of dayCounter on each while loop.
    spiceExtracted += startingYield - 26; // subtracting the workers's consumption out of the startingYield and incrementing that to the spiceExtracted for day[i].
    startingYield -= 10; // yield drops by 10 everyDay while the mine is running.
  }
  console.log(dayCounter); // Logging the days that the mine has runned determined by the above while loop's ++ counter
  if (dayCounter != 0) {
    // if the days are not 0 , therefore if the mine has worked for atleast a day startingYield is more than 26 , when its exhausted workers consume additional 26.
    console.log(spiceExtracted - 26);
  } else {
    // if it hasn't worked for a fullday , log the spiceExtracted
    console.log(spiceExtracted);
  }
}
