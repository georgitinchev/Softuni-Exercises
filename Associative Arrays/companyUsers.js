function solve(arr) {
  //1. create object for companies
  let obj = {};
  //2. add each employee to company within object
  for (let el of arr) {
    let [company, id] = el.split(" -> ");
    if (!obj.hasOwnProperty(company)) {
      obj[company] = new Set();
      obj[company].add(id);
    } else {
      obj[company].add(id);
    }
  }
  //3. as we've used a set , it cannot be manually sorted using .sort() so we'll convert it to array and back to a set after sorting
  let sorted = Object.entries(obj);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  //logging each property and then another loop for logging property values of set
  for (let elem of sorted) {
    console.log(elem[0]);
    for (let number of elem[1]) {
      console.log(`-- ${number}`);
    }
  }
}
