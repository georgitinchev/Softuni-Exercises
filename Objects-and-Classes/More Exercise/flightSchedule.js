function flight(input) {
  let flights = {};
  input[0].forEach((line) => {
    let [numberFly, destination] = line.split(" ");
    flights[numberFly] = {
      Destination: destination,
      Status: "Ready to fly",
    };
  }); // 1. from splitting each line of arr 1 by a space, create two variables numberFly and destination
  // 2. inside of flights object create a numberFly property with object nested inside of it containing destination and status which defaults to "Ready to fly"
  input[1].forEach((line) => {
    let [numberFly, status] = line.split(" ");
    if (flights.hasOwnProperty(numberFly)) {
      flights[numberFly].Status = status;
    }
  });
  // 1. from splitting each line of arr 2 by space, create two variables numberFly and status
  // 2. if flights object hasOwnProperty(numberFly) change the status inside of obj to the var status inside of forEach
  for (let fly in flights) {
    if (flights[fly].Status === String(input[2])) {
      console.log(flights[fly]);
    }
  }
  // 1. loop around object flights, if the status of each flight is equal to the thirdArr string
  // 2. console.log the destination,status object
}
