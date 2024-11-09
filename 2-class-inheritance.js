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
      // Your code here
    }
  
    addMileage(miles) {
      // Your code here
    }
  
    addService(description) {
      // Your code here
    }
  
    getInfo() {
      // Your code here
    }
  
    calculateValue() {
      // Your code here
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model, year, price, seats, doors) {
      // Your code here
    }
  
    calculateValue() {
      // Your code here
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(brand, model, year, price, engineCC) {
      // Your code here
    }
  
    calculateValue() {
      // Your code here
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