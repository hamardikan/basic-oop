/*
  Challenge #1 - Class Basics
  
  Notes:
  - Run your code in browser console or Node.js
  - You can use the test cases provided in the markdown for validation
  - Make sure to handle all edge cases
*/

class Pet {
  constructor(name, age, type, breed, energyLevel, isHealthy) {
    // Your code here
    if (!name || !age || !type || !breed || !energyLevel || !isHealthy) {
      throw new Error("Invalid data!");
    }
    if (age <= 0) {
      throw new Error("age must be greater than 0!");
    }
    if (!(energyLevel >= 0 && energyLevel <= 100)) {
      throw new Error("energy level must be between 0 - 100!")
    }
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.energyLevel = energyLevel;
    this.isHealthy = isHealthy;
    this.activities = [];
  }

  addActivity(activity) {
    if (!activity || typeof activity !== "string") {
      throw new Error("Invalid activity!")
    }
    this.activities.push(activity);
  }

  getActivityCount() {
    return this.activities.length;
  }

  feed(amount) {
    if (typeof amount !== "number") {
      throw new Error("amount mus be a positive number!");
    }
    this.energyLevel += amount;

    if (this.energyLevel > 100) {
      this.energyLevel = 100;
    }
    return this.energyLevel;
  }

  getHumanAge() {
    if (this.type === "cat") {
      return this.age * 7;
    } else if (this.type === "dog") {
      return this.age * 8;
    } else {
      return this.age * 5;
    }
  }

  checkHealth() {
    if (this.isHealthy && this.energyLevel > 50) {
      return true
    } else {
      return falsel
    }
  }
}

// Test cases
try {
  // Test Case 1: Basic pet creation and properties
  console.log('Test Case 1: Creating a new pet');
  const luna = new Pet("Luna", 3, "cat", "Persian", 80, true);
  console.log(luna.name === "Luna"); // Should print: true
  console.log(luna.energyLevel === 80); // Should print: true
  console.log(Array.isArray(luna.activities) && luna.activities.length === 0); // Should print: true

  // Add more test cases from the markdown here
  // ...

  console.log('All test cases passed!');
} catch (error) {
  console.error('Test failed:', error.message);
}