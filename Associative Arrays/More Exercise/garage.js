function garage(arr) {
  let obj = {};
  arr.forEach((line) => {
    let curr = line.split(" - ");
    let garage = curr[0];
    let carInfo = curr[1];
    if (!obj.hasOwnProperty(garage)) {
      obj[garage] = [];
    }
    obj[garage].push(carInfo);
  });
  let entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    console.log(`Garage № ${entries[i][0]}`);
    let cars = entries[i][1];
    for (let j = 0; j < cars.length; j++) {
      let split = cars[j].split(": ");
      console.log(`--- ${split.join(" - ")}`);
    }
  }
}
