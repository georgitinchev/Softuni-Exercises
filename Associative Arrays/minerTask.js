function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let qty = Number(arr[i + 1]);
    if (obj.hasOwnProperty(resource)) {
      let oldQty = obj[resource];
      let newQty = (qty += oldQty);
      obj[resource] = newQty;
    } else {
      obj[resource] = qty;
    }
  }
  let logArr = Object.entries(obj);
  for (let res of logArr) {
    console.log(`${res[0]} -> ${res[1]}`);
  }
}
