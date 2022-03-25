function towns(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split(" | ");
    let town = newArr[0];
    let lat = Number(newArr[1]);
    let lon = Number(newArr[2]);
    let obj = {
      town: town,
      latitude: lat.toFixed(2),
      longitude: lon.toFixed(2),
    };
    console.log(obj);
  }
}
