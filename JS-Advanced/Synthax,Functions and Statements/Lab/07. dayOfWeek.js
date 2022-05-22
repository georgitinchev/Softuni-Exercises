function solve(day) {
  switch (day) {
    case (day = "Monday"):
      console.log(1);
      break;
    case (day = "Tuesday"):
      console.log(2);
      break;
    case (day = "Wednesday"):
      console.log(3);
      break;
    case (day = "Thursday"):
      console.log(4);
      break;
    case (day = "Friday"):
      console.log(5);
      break;
    case (day = "Saturday"):
      console.log(6);
      break;
    case (day = "Sunday"):
      console.log(7);
      break;
    default:
      console.log("error");
      break;
  }
}
solve("Monday");
solve("Friday");
solve("Invalid");
