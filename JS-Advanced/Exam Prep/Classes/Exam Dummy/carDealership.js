class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model == "" || typeof model != "string") {
      throw "Invalid input!";
    } else if (!Number.isInteger(horsepower) || horsepower < 0) {
      throw "Invalid input!";
    } else if (typeof price != "number" || price < 0) {
      throw "Invalid input!";
    } else if (typeof mileage != "number" || mileage < 0) {
      throw "Invalid input!";
    } else {
      const car = {
        model,
        horsepower,
        price,
        mileage,
      };
      this.availableCars.push(car);
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$`;
    }
  }
  sellCar(model, desiredMileage) {}
}
