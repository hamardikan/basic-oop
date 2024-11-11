# Shape Polymorphism Exercise
---
## Learning Objectives

By completing this exercise, you will:
1. Understand how abstract classes work
2. Practice implementing inheritance
3. Learn to use method overriding
4. Understand how polymorphism allows uniform handling of different objects
5. Practice basic input validation and error handling

## Important Concepts

### Abstract Classes
- An abstract class provides a common base for other classes
- It cannot be instantiated directly (cannot create new Shape())
- Contains methods that child classes must implement
- May contain shared methods that all child classes can use

### Inheritance
- Child classes (Circle, Rectangle) extend the parent class (Shape)
- Child classes must call super() in their constructor
- Child classes inherit and can override parent methods

### Polymorphism
- Different shapes can be treated uniformly through their common Shape interface
- Each shape implements the same methods (getArea, toString) in its own way
- Collections can work with any shape without knowing its specific type

---

## Step-by-Step Implementation Guide

### 1. Complete the Shape Class

```javascript
class Shape {
  constructor() {
    // TODO: Add code that prevents direct Shape instantiation
    // HINT: Check if this.constructor is Shape
    // If it is, throw new Error("Cannot create a Shape directly!")
  }

  getArea() {
    // TODO: Make this an abstract method by throwing an error
    // This forces child classes to implement their own getArea()
    // throw new Error("getArea() must be implemented");
  }

  toString() {
    // TODO: Make this an abstract method by throwing an error
    // This forces child classes to implement their own toString()
    // throw new Error("toString() must be implemented");
  }
}
```

### 2. Implement Circle Class

```javascript
class Circle extends Shape {
  constructor(radius) {
    // TODO: 1. Call parent constructor using super()
    // TODO: 2. Validate radius is a positive number
    //         - if radius <= 0, throw new Error("Radius must be positive")
    // TODO: 3. Initialize this.radius
  }

  getArea() {
    // TODO: Implement area calculation for a circle
    // Formula: π * radius * radius
    // Use Math.PI for the value of π
  }

  toString() {
    // TODO: Return a string in the format: "Circle with radius {radius}"
    // Example: "Circle with radius 5"
  }
}
```

### 3. Implement Rectangle Class

```javascript
class Rectangle extends Shape {
  constructor(width, height) {
    // TODO: 1. Call parent constructor using super()
    // TODO: 2. Validate width and height are positive numbers
    //         - if either <= 0, throw new Error("Width and height must be positive")
    // TODO: 3. Initialize this.width and this.height
  }

  getArea() {
    // TODO: Implement area calculation for a rectangle
    // Formula: width * height
  }

  toString() {
    // TODO: Return a string in the format: 
    // "Rectangle with width {width} and height {height}"
    // Example: "Rectangle with width 4 and height 6"
  }
}
```

### 4. Implement Square Class

```javascript
class Square extends Rectangle {
  constructor(side) {
    // TODO: Call Rectangle constructor with side for both width and height
    // HINT: Use super(side, side)
  }

  toString() {
    // TODO: Override toString to return appropriate square description
    // Format: "Square with side {side}"
    // Example: "Square with side 5"
    // HINT: You can access the side length using this.width or this.height
  }

  // Note: getArea() is inherited from Rectangle and works correctly!
}
```

### 5. Implement ShapeCollection Class

```javascript
class ShapeCollection {
  constructor() {
    this.shapes = [];
  }

  addShape(shape) {
    // TODO: 1. Verify shape is instance of Shape class
    //         - use 'instanceof' operator
    //         - if not, throw new Error("Can only add shapes!")
    // TODO: 2. Add valid shape to this.shapes array
  }

  getTotalArea() {
    // TODO: Calculate and return sum of all shapes' areas
    // HINT: Use array reduce method to sum getArea() of each shape
  }

  printShapes() {
    // TODO: Print information about each shape
    // HINT: Use array forEach to call toString() on each shape
  }
}
```

## Testing Your Implementation

### Basic Shape Creation
```javascript
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const square = new Square(3);

// These should print the correct string representations
console.log(circle.toString());    // "Circle with radius 5"
console.log(rectangle.toString()); // "Rectangle with width 4 and height 6"
console.log(square.toString());    // "Square with side 3"
```

### Area Calculations
```javascript
// These should print the correct areas
console.log(circle.getArea());    // ~78.54 (π * 5 * 5)
console.log(rectangle.getArea()); // 24 (4 * 6)
console.log(square.getArea());    // 9 (3 * 3)
```

### Collection Usage
```javascript
const collection = new ShapeCollection();

// Adding shapes should work
collection.addShape(circle);
collection.addShape(rectangle);
collection.addShape(square);

// Should print sum of all areas
console.log("Total area: " + collection.getTotalArea());

// Should print information about each shape
collection.printShapes();
```

### Error Cases
```javascript
// These should all throw appropriate errors
try {
    new Shape();  // "Cannot create a Shape directly!"
} catch (e) {
    console.log(e.message);
}

try {
    new Circle(-5);  // "Radius must be positive"
} catch (e) {
    console.log(e.message);
}

try {
    collection.addShape({});  // "Can only add shapes!"
} catch (e) {
    console.log(e.message);
}
```

## Common Mistakes to Avoid

1. Forgetting to call super() in child class constructors
2. Not validating input values in constructors
3. Forgetting to throw errors for invalid inputs
4. Not checking if an object is a Shape in addShape()
5. Using incorrect format in toString() methods
6. Not using proper floating-point numbers for circle calculations

## Tips for Success

1. Implement one class at a time and test it thoroughly
2. Use the provided test cases to verify your implementation
3. Make sure all error messages match exactly what's expected
4. Test edge cases (0, negative numbers, invalid inputs)
5. Remember that Square inherits getArea() from Rectangle

## Grading Criteria

Your implementation will be tested for:
1. Correct class hierarchy and inheritance
2. Proper input validation and error handling
3. Accurate area calculations
4. Correct string representations
5. Proper collection management
6. Handling of error cases