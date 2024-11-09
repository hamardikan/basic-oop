/*
  Challenge #2 - Class Inheritance
  
  Notes:
  - Run your code in browser console or Node.js
  - You can use the test cases provided in the markdown for validation
  - Make sure to handle all edge cases
  - Remember to use super() in child classes
*/

class Vehicle {
  constructor(brand, model, year, price) {
    if (!brand || !model || !year || !price) {
      throw new Error("Invalid data input!");
    }
    if (typeof brand !== 'string' || typeof model !== 'string') {
      throw new Error("brand and model must be a string!");
    }
    if (typeof year !== 'number' || typeof price !== 'number') {
      throw new Error("year and price must be a number!");
    }
    if (price <= 0) {
      throw new Error("Base price must be greater than zero;");
    }
    if (year < 2000) {
      throw new Error("Car is too old!");
    }

    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.mileage = 0;
    this.service = [];
  }
  addMileage(miles) {
    if (miles <= 0) {
      throw new Error("miles must be positive number!")
    }
    this.mileage += miles;
    return this.mileage;
  }

  addService(description) {
    this.service.push(description);
    return this.service.length;
  }

  getInfo() {
    return `year: ${this.year} , brand: ${this.brand}, model: ${this.model}`;
  }

  calculateValue() {
    const depreciation = (2024 - this.year) * 0.1 + this.mileage * 0.000001;
    return (this.price * (1 - depreciation));
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, price, seats, doors) {
    super(brand, model, year, price)
    if (typeof seats !== "number" || typeof doors !== "number") {
      throw new Error("seats and doors must be number!");
    }
    if (!(seats >= 2 && seats <= 8)) {
      throw new Error('seats must be between 2 and 8!');
    }
    if (!(doors >= 2 && doors <= 4)) {
      throw new Error('doors must be between 2 and 4!');
    }
    this.seats = seats
    this.doors = doors;
    this.type = "Car"
  }

  calculateValue() {
    let value = this.calculateValue();
    value = value * (1 + (this.doors - 2) * 0.05);
    return value;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, year, price, engineCC) {
    super(brand, model, year, price);
    if (typeof engineCC !== "number" || engineCC <= 0) {
      throw new Error("Engine sie must be in cc and more than zero!")
    }
    this.engineCC;
    this.type = "Motorcycle"
  }

  calculateValue() {
    let value = this.calculateValue();
    value = value * (1 + this.engineCC * 0.01 / 100)
  }
}


// Test cases
try {
  console.log('Test Case 1: Creating vehicles');
  const car = new Car("Toyota", "Camry", 2021, 30000, 5, 4);
  console.log(car.getInfo() === "2021 Toyota Camry"); // Should print: true
  console.log(car.type === "Car"); // Should print: true

  const moto = new Motorcycle("Harley", "Sportster", 2020, 15000, 1200);
  console.log(moto.getInfo() === "2020 Harley Sportster"); // Should print: true
  console.log(moto.type === "Motorcycle"); // Should print: true

  // Add more test cases from the markdown here
  // ...

  console.log('All test cases passed!');
} catch (error) {
  console.error('Test failed:', error.message);
}
