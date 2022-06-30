class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model.length === 0 || horsepower < 0 || price < 0 || mileage < 0) {
      throw "Invalid input!";
    } else {
      let obj = { model, horsepower, price, mileage };
      this.availableCars.push(obj);
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$`;
    }
  }
  sellCar(model, desiredMileage) {
    if (!this.availableCars.includes(model)) {
      throw `${model} was not found!`;
    } else {
      this.availableCars.forEach((a) => {
        if (a.includes(model)) {
          const index = this.availableCars.indexOf(a);
          let keys = Object.keys(a);
          let mileage = keys[keys.length - 1];
          let price = keys[keys.length - 2];
          const horses = keys[keys.length - 3];
          const model = keys[keys.length - 4];
          if (mileage <= desiredMileage) {
          } else if (mileage - desiredMileage <= 40000) {
            price = price * 0.95;
          } else if (mileage - desiredMileage > 40000) {
            price = price * 0.9;
          }
          const obj = {
            model,
            horses,
            price,
          };
          this.availableCars.splice(index, 1);
          this.soldCars.push(obj);
          this.totalIncome += price;
          return `${model} was sold for ${price}`;
        }
      });
    }
  }
}
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C63", 110000));
