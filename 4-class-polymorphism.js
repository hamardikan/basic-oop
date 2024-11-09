/*
  Challenge #4 - Class Polymorphism
  
  Notes:
  - Run your code in browser console or Node.js
  - Implement all required methods in each class
  - Use proper validation for all inputs
  - Handle floating point precision carefully
  - Maintain proper inheritance chains
*/

// Abstract base class
class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract Shape class");
      }
    }
  
    getArea() {
      throw new Error("getArea() must be implemented");
    }
  
    getPerimeter() {
      throw new Error("getPerimeter() must be implemented");
    }
  
    toString() {
      throw new Error("toString() must be implemented");
    }
  
    scale(factor) {
      throw new Error("scale() must be implemented");
    }
  
    equals(shape) {
      throw new Error("equals() must be implemented");
    }
  }
  
  // Basic shapes
  class Circle extends Shape {
    constructor(radius) {
      // Your code here
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      // Your code here
    }
  }
  
  class Triangle extends Shape {
    constructor(side1, side2, side3) {
      // Your code here
    }
  }
  
  // Complex shapes
  class Square extends Rectangle {
    constructor(side) {
      // Your code here
    }
  }
  
  class RegularPolygon extends Shape {
    constructor(sides, sideLength) {
      // Your code here
    }
  }
  
  // Shape factory
  class ShapeFactory {
    static createCircle(radius) {
      // Your code here
    }
  
    static createRectangle(width, height) {
      // Your code here
    }
  
    static createSquare(side) {
      // Your code here
    }
  
    static createTriangle(side1, side2, side3) {
      // Your code here
    }
  
    static createRegularPolygon(sides, sideLength) {
      // Your code here
    }
  }
  
  // Shape container
  class ShapeCollection {
    constructor() {
      this.shapes = [];
    }
  
    addShape(shape) {
      // Your code here
    }
  
    getTotalArea() {
      // Your code here
    }
  
    getTotalPerimeter() {
      // Your code here
    }
  
    getShapesByType(type) {
      // Your code here
    }
  
    scaleAllShapes(factor) {
      // Your code here
    }
  
    toString() {
      // Your code here
    }
  }
  
  // Test cases
  try {
    console.log('Test Case 1: Creating Shapes');
    const circle = ShapeFactory.createCircle(5);
    const rectangle = ShapeFactory.createRectangle(4, 6);
    const square = ShapeFactory.createSquare(4);
    
    console.log(circle.toString() === "Circle[radius=5]"); // Should print: true
    console.log(rectangle.toString() === "Rectangle[width=4, height=6]"); // Should print: true
    console.log(square.toString() === "Square[side=4]"); // Should print: true
  
    // Add more test cases from the markdown here
    // ...
  
    console.log('All test cases passed!');
  } catch (error) {
    console.error('Test failed:', error.message);
  }