function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   // display the best restaurant of all added with its avg salary and best salary
   function onClick () {
      if(document.getElementById("workers").children[2].textContent != "") {
         document.getElementById("workers").children[2].textContent = ""
      }
      const textArea = document.getElementById("inputs").children[1];
      let restaurant = JSON.parse(textArea.value)
      let restObj = {};
      for(let element of restaurant) {
         let obj = {};
         let salaries = []
         element = element.split(" ");
         let restaurantName = element.shift();
         element.shift();
         for(let i = 1;i < element.length;i+=2) {
            element[i] = element[i].replace(","," ").trim()
            let salary = Number(element[i]);
            salaries.push(salary)
            let worker = element[i - 1];
            obj[worker] = salary
         }
         let avgSalary = (salaries.reduce((a, v) => a + v, 0) / salaries.length).toFixed(2)
         restObj[restaurantName] =  [obj,avgSalary]
      }
      let entries = Object.entries(restObj);
      entries.sort((a,b) => {
         a = a[1][1];
         b = b[1][1];
         return a > b ? -1 : 1;
      })
      for(let element of entries) {
         let entries = Object.entries(element[1][0])
         entries.sort((a,b) => {
            a = a[1];
            b = b[1];
            return a > b ? -1 : 1;
         })
      }
      // `Name: {entries[0][0]} Average Salary: {entries[0][1][1]} Best Salary: {Object.entries(entries[0][1][0])[0][1].toFixed(2)}`
      let bestRestaurant = `Name: ${entries[0][0]} Average Salary: ${entries[0][1][1]} Best Salary: ${Object.entries(entries[0][1][0])[0][1].toFixed(2)}`;
      document.getElementById("bestRestaurant").children[2].textContent = bestRestaurant

      for(let i = 0; i < Object.entries(entries[0][1][0]).length;i++) {
      let element = Object.entries(entries[0][1][0])[i];
      if(i != Object.entries(entries[0][1][0]).length - 1) {
      let worker = `Name: ${element[0]} With Salary: ${element[1]} `
      document.getElementById("workers").children[2].textContent += worker
      } else {
      let worker = `Name: ${element[0]} With Salary: ${element[1]} `
      worker.trimEnd()
      document.getElementById("workers").children[2].textContent += worker
      }
   }
   }
}