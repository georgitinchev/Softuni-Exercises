class Vehicle {
  constructor(type, model, parts, fuel, drive) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.parts.quality = parts.engine * parts.power;
    this.fuel = fuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}
