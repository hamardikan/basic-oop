# #4 - Class Polymorphism
---
## Objectives

- Understand and implement polymorphic behavior
- Create and use abstract base classes
- Apply method overriding effectively
- Handle different object types uniformly
- Create flexible and extensible code

### RESTRICTION
- Function and method names must be exactly as specified
- Cannot instantiate the Shape base class directly
- Must implement all required methods in child classes
- Cannot use instanceof for type checking
- Must use proper method overriding

### HINTS
- Base Shape class should be abstract
- Use proper validation in each shape class
- Consider edge cases for calculations
- Think about how shapes can transform
- Remember to handle floating point precision

---

## Directions

Help PolyGenius Studio create a flexible shape calculation system! The system needs to handle various geometric shapes while maintaining clean, reusable code through polymorphism.

### Task 1: Create Abstract Shape Class

Create a base `Shape` class that other shapes will extend:

```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract Shape class");
    }
  }

  // Abstract methods that must be implemented
  getArea() {
    throw new Error("getArea() must be implemented");
  }

  getPerimeter() {
    throw new Error("getPerimeter() must be implemented");
  }

  toString() {
    throw new Error("toString() must be implemented");
  }

  // Concrete methods shared by all shapes
  scale(factor) {
    throw new Error("scale() must be implemented");
  }

  equals(shape) {
    throw new Error("equals() must be implemented");
  }
}
```

### Task 2: Implement Basic Shapes

Create classes for basic shapes that extend the Shape class:

1. Circle Class:
```javascript
class Circle extends Shape {
  constructor(radius) {
    // Validate and initialize radius
  }
}
```

2. Rectangle Class:
```javascript
class Rectangle extends Shape {
  constructor(width, height) {
    // Validate and initialize dimensions
  }
}
```

3. Triangle Class:
```javascript
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    // Validate and initialize sides
    // Check if valid triangle
  }
}
```

### Task 3: Implement Complex Shapes

Create classes for more complex shapes:

1. Square Class (extends Rectangle):
```javascript
class Square extends Rectangle {
  constructor(side) {
    // Use rectangle constructor properly
  }
}
```

2. RegularPolygon Class:
```javascript
class RegularPolygon extends Shape {
  constructor(sides, sideLength) {
    // Validate and create regular polygon
    // Must have 3 or more sides
  }
}
```

### Task 4: Implement Shape Factory

Create a factory class to handle shape creation:

```javascript
class ShapeFactory {
  static createCircle(radius) {
    // Create and return circle
  }

  static createRectangle(width, height) {
    // Create and return rectangle
  }

  static createSquare(side) {
    // Create and return square
  }

  static createTriangle(side1, side2, side3) {
    // Create and return triangle
  }

  static createRegularPolygon(sides, sideLength) {
    // Create and return regular polygon
  }
}
```

### Task 5: Implement Shape Container

Create a container class to manage collections of shapes:

```javascript
class ShapeCollection {
  constructor() {
    this.shapes = [];
  }

  addShape(shape) {
    // Add shape to collection
  }

  getTotalArea() {
    // Calculate total area
  }

  getTotalPerimeter() {
    // Calculate total perimeter
  }

  getShapesByType(type) {
    // Return shapes of specific type
  }

  scaleAllShapes(factor) {
    // Scale all shapes by factor
  }

  toString() {
    // Return string representation
  }
}
```

### Example Test Cases

```javascript
// Test Case 1: Creating Shapes
const circle = ShapeFactory.createCircle(5);
const rectangle = ShapeFactory.createRectangle(4, 6);
const square = ShapeFactory.createSquare(4);
const triangle = ShapeFactory.createTriangle(3, 4, 5);
const pentagon = ShapeFactory.createRegularPolygon(5, 4);

console.log(circle.toString()); // "Circle[radius=5]"
console.log(rectangle.toString()); // "Rectangle[width=4, height=6]"
console.log(square.toString()); // "Square[side=4]"

// Test Case 2: Calculations
console.log(circle.getArea()); // 78.54 (π * 5^2)
console.log(rectangle.getPerimeter()); // 20 (2 * (4 + 6))
console.log(triangle.getArea()); // 6 (Heron's formula)
console.log(pentagon.getPerimeter()); // 20 (5 * 4)

// Test Case 3: Shape Collection
const collection = new ShapeCollection();
collection.addShape(circle);
collection.addShape(rectangle);
collection.addShape(square);

console.log(collection.getTotalArea()); // Sum of all areas
console.log(collection.getTotalPerimeter()); // Sum of all perimeters

// Test Case 4: Scaling
circle.scale(2);
console.log(circle.toString()); // "Circle[radius=10]"
console.log(circle.getArea()); // 314.16 (π * 10^2)

// Test Case 5: Shape Equality
const square1 = ShapeFactory.createSquare(5);
const square2 = ShapeFactory.createSquare(5);
const square3 = ShapeFactory.createSquare(6);

console.log(square1.equals(square2)); // true
console.log(square1.equals(square3)); // false
```

### Error Cases to Handle

1. Invalid Shape Creation:
```javascript
// Should throw error: "Radius must be positive"
ShapeFactory.createCircle(-5);

// Should throw error: "Width and height must be positive"
ShapeFactory.createRectangle(-4, 6);

// Should throw error: "Invalid triangle sides"
ShapeFactory.createTriangle(1, 1, 3); // Triangle inequality

// Should throw error: "Regular polygon must have 3 or more sides"
ShapeFactory.createRegularPolygon(2, 5);
```

2. Invalid Operations:
```javascript
// Should throw error: "Scale factor must be positive"
circle.scale(-2);

// Should throw error: "Cannot add non-Shape object"
collection.addShape({type: "circle", radius: 5});

// Should throw error: "Cannot compare Shape with non-Shape"
circle.equals({radius: 5});
```

### Required Implementations

1. Area Calculations:
   - Circle: π * r²
   - Rectangle: width * height
   - Triangle: Heron's formula
   - Regular Polygon: (n * s²)/(4 * tan(π/n))

2. Perimeter Calculations:
   - Circle: 2 * π * r
   - Rectangle: 2 * (width + height)
   - Triangle: sum of all sides
   - Regular Polygon: sides * sideLength

3. Scaling Rules:
   - Circle: scales radius
   - Rectangle: scales both dimensions
   - Triangle: scales all sides
   - Maintains shape proportions

4. Equality Rules:
   - Same shape type
   - Same dimensions
   - Allow small floating-point differences

### Notes:
- Use Math.PI for π calculations
- Round results to 2 decimal places
- Use proper floating-point comparison
- Implement proper validation for all inputs
- Maintain immutability where appropriate
- Use descriptive error messages