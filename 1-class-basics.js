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
    }
  
    addActivity(activity) {
      // Your code here
    }
  
    getActivityCount() {
      // Your code here
    }
  
    feed(amount) {
      // Your code here
    }
  
    getHumanAge() {
      // Your code here
    }
  
    checkHealth() {
      // Your code here
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