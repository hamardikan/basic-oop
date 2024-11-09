# #1 - Class Basics
---
## Objectives

- Create and initialize classes using constructor
- Understand how to use instance properties
- Implement instance methods
- Learn to use the `this` keyword properly
- Handle data validation in OOP context

### RESTRICTION
- Function and method names must be exactly as specified
- All properties must be initialized in constructor
- No static methods allowed for this challenge
- Do not use arrow functions for methods
- You can only use most basic array methods (push, pop, shift, unshift)

### HINTS
- The `Pet` class will be the base for our system
- Make sure to validate inputs in constructor
- Use proper naming conventions (camelCase for methods)
- Pay attention to the data types in test cases

---

## Directions

Help Mr. Xander, a pet shop owner, create a system to manage his pets! He needs a simple system that can:
- Register new pets with their details
- Keep track of pet health and activities
- Handle pet feeding and energy levels
- Calculate pet age in human years

### Task 1: Create Pet Class

Create a `Pet` class with the following specifications:

```javascript
class Pet {
  constructor(name, age, type, breed, energyLevel, isHealthy) {
    // Initialize properties here
  }
}
```

Properties:
- `name` (string): Pet's name
- `age` (number): Pet's age in years (must be > 0)
- `type` (string): Type of pet (e.g., "cat", "dog")
- `breed` (string): Breed of pet
- `energyLevel` (number): Current energy level (0-100)
- `isHealthy` (boolean): Health status
- `activities` (array): List of activities (initialized as empty array)

### Task 2: Implement Core Methods

Add these methods to your Pet class:

1. `addActivity(activity)`
   - Adds new activity to activities array
   - Parameter: activity (string)
   - Return: updated activities array length

2. `getActivityCount()`
   - Returns number of activities
   - No parameters
   - Return: number

3. `feed(amount)`
   - Increases energy level by amount
   - Parameter: amount (number)
   - Energy cannot exceed 100
   - Return: updated energy level

4. `getHumanAge()`
   - Calculates age in human years
   - No parameters
   - For cats: age * 7
   - For dogs: age * 8
   - Other pets: age * 5
   - Return: calculated human age

5. `checkHealth()`
   - Checks if pet is healthy and has enough energy
   - No parameters
   - Return: true if healthy AND energy > 50
   - Return: false otherwise

### Example Test Cases

```javascript
// Test Case 1: Creating a new pet
const luna = new Pet("Luna", 3, "cat", "Persian", 80, true);
console.log(luna.name); // "Luna"
console.log(luna.energyLevel); // 80
console.log(luna.activities); // []

// Test Case 2: Adding activities
console.log(luna.addActivity("playing")); // 1
console.log(luna.addActivity("sleeping")); // 2
console.log(luna.activities); // ["playing", "sleeping"]
console.log(luna.getActivityCount()); // 2

// Test Case 3: Feeding pet
console.log(luna.energyLevel); // 80
console.log(luna.feed(30)); // 100 (not 110, capped at 100)
console.log(luna.energyLevel); // 100

// Test Case 4: Get human age
const max = new Pet("Max", 5, "dog", "Golden Retriever", 90, true);
console.log(luna.getHumanAge()); // 21 (cat: 3 * 7)
console.log(max.getHumanAge()); // 40 (dog: 5 * 8)

// Test Case 5: Health check
console.log(luna.checkHealth()); // true (healthy and energy > 50)
luna.energyLevel = 30;
console.log(luna.checkHealth()); // false (energy ≤ 50)
```

### Error Cases to Handle

1. Constructor validation:
```javascript
// Should throw error: "Age must be a positive number"
const pet1 = new Pet("Bad", -1, "cat", "Persian", 80, true);

// Should throw error: "Energy level must be between 0 and 100"
const pet2 = new Pet("Bad", 1, "cat", "Persian", 150, true);

// Should throw error: "Name cannot be empty"
const pet3 = new Pet("", 1, "cat", "Persian", 80, true);
```

2. Method validation:
```javascript
const pet = new Pet("Test", 1, "cat", "Persian", 80, true);

// Should throw error: "Activity cannot be empty"
pet.addActivity("");

// Should throw error: "Feed amount must be a positive number"
pet.feed(-10);
```

### Notes:
- All validation errors should be thrown using the Error class
- Energy level should always stay between 0 and 100
- All numeric returns should be integers
- Activities array should not allow duplicate entries