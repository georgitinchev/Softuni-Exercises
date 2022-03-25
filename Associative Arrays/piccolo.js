function piccolo(arr) {
  let parking = new Map();
  for (let curr of arr) {
    let car = curr.split(", ");
    if (car[0] == "IN") {
      parking.set(car[1], 1);
    } else {
      parking.delete(car[1]);
    }
  }

  if (parking.size == 0) {
    console.log("Parking Lot is Empty");
  } else {
    let result = Array.from(parking.keys());
    result.sort();
    for (let car of result) {
      console.log(car);
    }
  }
}
