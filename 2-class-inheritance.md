# #2 - Class Inheritance
---
## Objectives

- Understand and implement class inheritance
- Use the `extends` and `super` keywords properly
- Override parent class methods in child classes
- Implement method chaining
- Learn when to use inheritance vs composition

### RESTRICTION
- Function and method names must be exactly as specified
- Must use class inheritance with `extends`
- All properties must be initialized in constructor
- Cannot use static methods
- You can only use most basic array methods (push, pop, shift, unshift)

### HINTS
- The `Vehicle` class will be the parent class
- Use `super()` in child class constructors
- Remember to call parent methods when needed
- Consider what properties should be inherited vs overridden

---

## Directions

Help AutoMaster Factory create a vehicle management system! The factory produces different types of vehicles (cars and motorcycles) and needs to track their specifications, maintenance, and performance.

### Task 1: Create Base Vehicle Class

Create a `Vehicle` class as the parent class:

```javascript
class Vehicle {
  constructor(brand, model, year, price) {
    // Initialize properties here
  }
}
```

Base Properties:
- `brand` (string): Vehicle brand name
- `model` (string): Vehicle model name
- `year` (number): Manufacturing year (must be >= 2000)
- `price` (number): Base price (must be > 0)
- `mileage` (number): Current mileage (initialized to 0)
- `services` (array): Service history (initialized as empty array)

### Task 2: Create Car Class

Create a `Car` class that extends `Vehicle`:

```javascript
class Car extends Vehicle {
  constructor(brand, model, year, price, seats, doors) {
    // Your code here
  }
}
```

Additional Car Properties:
- `seats` (number): Number of seats (must be 2-8)
- `doors` (number): Number of doors (must be 2 or 4)
- `type` (string): Always set to "Car"

### Task 3: Create Motorcycle Class

Create a `Motorcycle` class that extends `Vehicle`:

```javascript
class Motorcycle extends Vehicle {
  constructor(brand, model, year, price, engineCC) {
    // Your code here
  }
}
```

Additional Motorcycle Properties:
- `engineCC` (number): Engine size in CC (must be > 0)
- `type` (string): Always set to "Motorcycle"

### Task 4: Implement Methods

Add these methods to the appropriate classes:

1. In Vehicle class (parent methods):
   ```javascript
   addMileage(miles) {
     // Adds miles to current mileage
     // Parameter: miles (number, must be > 0)
     // Return: new mileage
   }

   addService(description) {
     // Adds service record with date
     // Parameter: description (string)
     // Return: new services array length
   }

   getInfo() {
     // Returns basic vehicle info
     // Return: string in format "YEAR BRAND MODEL"
   }

   calculateValue() {
     // Calculates current value based on age and mileage
     // Decrease 10% for each year from current year
     // Additional 0.0001% decrease per mile
     // Return: calculated value
   }
   ```

2. In Car class (override calculateValue):
   ```javascript
   calculateValue() {
     // Use parent's calculation first
     // Add 5% for each seat above 2 seats
   }
   ```

3. In Motorcycle class (override calculateValue):
   ```javascript
   calculateValue() {
     // Use parent's calculation first
     // Add 0.01% for each CC of engine size
   }
   ```

### Example Test Cases

```javascript
// Test Case 1: Creating vehicles
const car = new Car("Toyota", "Camry", 2021, 30000, 5, 4);
console.log(car.getInfo()); // "2021 Toyota Camry"
console.log(car.type); // "Car"

const moto = new Motorcycle("Harley", "Sportster", 2020, 15000, 1200);
console.log(moto.getInfo()); // "2020 Harley Sportster"
console.log(moto.type); // "Motorcycle"

// Test Case 2: Adding mileage and services
console.log(car.addMileage(1000)); // 1000
console.log(car.addService("Oil change")); // 1
console.log(car.services[0]); // Should contain "Oil change" and today's date

// Test Case 3: Value calculations
// Assuming current year is 2024
const car2021 = new Car("Toyota", "Camry", 2021, 30000, 5, 4);
console.log(car2021.calculateValue()); 
// Base: 30000
// 3 years old: -30% (21000)
// 5 seats: +15% (24150)

const moto2020 = new Motorcycle("Harley", "Sportster", 2020, 15000, 1200);
console.log(moto2020.calculateValue());
// Base: 15000
// 4 years old: -40% (9000)
// 1200cc: +12% (10080)
```

### Error Cases to Handle

1. Base Vehicle validation:
```javascript
// Should throw error: "Year must be 2000 or later"
const vehicle1 = new Vehicle("Bad", "Model", 1999, 10000);

// Should throw error: "Price must be greater than 0"
const vehicle2 = new Vehicle("Bad", "Model", 2020, -1000);
```

2. Car validation:
```javascript
// Should throw error: "Invalid number of seats"
const car1 = new Car("Toyota", "Camry", 2021, 30000, 1, 4);
const car2 = new Car("Toyota", "Camry", 2021, 30000, 9, 4);

// Should throw error: "Invalid number of doors"
const car3 = new Car("Toyota", "Camry", 2021, 30000, 5, 3);
```

3. Motorcycle validation:
```javascript
// Should throw error: "Engine CC must be greater than 0"
const moto1 = new Motorcycle("Harley", "Sportster", 2020, 15000, -100);
```

4. Method validation:
```javascript
const car = new Car("Toyota", "Camry", 2021, 30000, 5, 4);

// Should throw error: "Miles must be greater than 0"
car.addMileage(-100);

// Should throw error: "Service description cannot be empty"
car.addService("");
```

### Notes:
- All validation errors should be thrown using the Error class
- Use the current year for age-based calculations
- All numeric calculations should round to 2 decimal places
- Service records should include the service date
- Override methods should extend parent functionality, not replace it completely