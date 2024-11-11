/*
  Simple Shape Polymorphism Exercise
  
  Instructions:
  - Implement the missing code in each class
  - Run the tests to verify your implementation
  - Make sure to handle all error cases
  - Use proper validation for inputs
*/

// Abstract base class
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot create shape directly!")
        }
    }

    getArea() {
        throw new Error("getArea() must be implemented!")
    }

    toString() {
        throw new Error("toString() must be implemented!")
    }
}

// Circle implementation
class Circle extends Shape {
    constructor(radius) {
        super();
        if (radius <= 0) {
            throw new Error("Radius must be positive!")
        }
        this.radius = radius;
    }

    getArea() {
        const area = Math.PI * this.radius * this.radius;
        return area;
    }

    toString() {
        return `Circle with radius ${this.radius}`
    }
}

// Rectangle implementation
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive number!");
        }
        this.width = width;
        this.height = height;
    }

    getArea() {
        const area = this.width * this.height;
        return area;
    }

    toString() {
        return `Rectangle with width ${this.width} and height ${this.height}`
    }
}

// Square implementation (extends Rectangle)
class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }

    toString() {
        return `Square with side ${this.width}`;
    }
}

// Shape collection
class ShapeCollection {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        if (!(shape instanceof Shape)) {
            throw new Error("Can only add shapes!");
        } else {
            this.shapes.push(shape);
        }
    }

    getTotalArea() {
        return this.shapes.reduce((total, shape) => {
            return total + shape.getArea();
        }, 0)
    }
    // This is equivalent to writing:
    /*
    let total = 0;  // Initial value
    for(let shape of this.shapes) {
        total = total + shape.getArea();
    }
    return total;
    */

    printShapes() {
        this.shapes.forEach(shape => {
            console.log(shape.toString());
        })
    }
    /*
   for(let shape of this.shapes) {
       console.log(shape.toString());
   }
   */
}

// Test cases
try {
    // Create shapes
    const circle = new Circle(5);
    const rectangle = new Rectangle(4, 6);
    const square = new Square(3);

    // Test toString() output
    console.log(circle.toString());    // Should print: "Circle with radius 5"
    console.log(rectangle.toString()); // Should print: "Rectangle with width 4 and height 6"
    console.log(square.toString());    // Should print: "Square with side 3"

    // Test areas
    console.log(circle.getArea());    // Should print: ~78.54 (π * 5 * 5)
    console.log(rectangle.getArea()); // Should print: 24 (4 * 6)
    console.log(square.getArea());    // Should print: 9 (3 * 3)

    // Test collection
    const collection = new ShapeCollection();
    collection.addShape(circle);
    collection.addShape(rectangle);
    collection.addShape(square);

    console.log("Total area: " + collection.getTotalArea());
    collection.printShapes();

    // Error case tests
    try {
        new Shape(); // Should throw error
    } catch (e) {
        console.log("Error test 1:", e.message);
    }

    try {
        new Circle(-5); // Should throw error
    } catch (e) {
        console.log("Error test 2:", e.message);
    }

    try {
        collection.addShape({}); // Should throw error
    } catch (e) {
        console.log("Error test 3:", e.message);
    }

} catch (error) {
    console.error("Test failed:", error.message);
}