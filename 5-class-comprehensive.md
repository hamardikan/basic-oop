# Challenge #5 - Digital Library System
---
## Learning Objectives

By completing this exercise, you will demonstrate mastery of:
1. Class creation and initialization
2. Inheritance and polymorphism
3. Encapsulation and private fields
4. Method overriding and abstract methods
5. Complex data validation
6. Collection management
7. Transaction history tracking

### RESTRICTIONS
- Must use private fields (#) for sensitive data
- Function and method names must be exactly as specified
- Cannot use static methods
- Can only use basic array methods (push, pop, shift, unshift)
- Must implement proper error handling

### HINTS
- The Media class will be abstract (cannot be instantiated directly)
- Use inheritance for different types of media
- Implement proper encapsulation for user data
- Track all lending transactions
- Consider using method chaining where appropriate

---

## Challenge Description

Create a Digital Library Management System that handles different types of media (books, magazines, DVDs) and manages user borrowing. The system should track inventory, handle user memberships, and maintain lending history.

### Task 1: Create Abstract Media Class

```javascript
class Media {
  constructor(id, title, year, copies) {
    // TODO: Implement constructor
    // Validate: id must be string, title non-empty, year >= 1900, copies > 0
    // Throw appropriate errors if validation fails
  }

  // Abstract method - must be implemented by child classes
  getDuration() {
    throw new Error("getDuration() must be implemented");
  }

  // Abstract method - must be implemented by child classes
  getType() {
    throw new Error("getType() must be implemented");
  }

  // Shared method for all media types
  isAvailable() {
    // Returns true if at least one copy is available
  }
}
```

### Task 2: Create Media Type Classes

```javascript
class Book extends Media {
  constructor(id, title, year, copies, author, pages) {
    // TODO: Implement constructor
    // Additional validation: pages must be > 0
  }

  getDuration() {
    // Returns estimated reading time (pages * 2 minutes)
  }

  getType() {
    return "Book";
  }
}

class Magazine extends Media {
  constructor(id, title, year, copies, issue, publisher) {
    // TODO: Implement constructor
    // Additional validation: issue must be non-empty
  }

  getDuration() {
    // Returns fixed reading time (30 minutes)
  }

  getType() {
    return "Magazine";
  }
}

class DVD extends Media {
  constructor(id, title, year, copies, director, runtime) {
    // TODO: Implement constructor
    // Additional validation: runtime must be > 0
  }

  getDuration() {
    // Returns runtime in minutes
  }

  getType() {
    return "DVD";
  }
}
```

### Task 3: Create User Management

```javascript
class LibraryMember {
  #id;
  #name;
  #borrowedItems;
  #borrowHistory;
  
  constructor(id, name) {
    // TODO: Initialize private fields
    // Validate id and name
    // Initialize empty arrays for borrowed items and history
  }

  // Implement getters for private fields
  getId() { }
  getName() { }
  getBorrowedItems() { }
  getBorrowHistory() { }

  canBorrow() {
    // Returns true if member has less than 3 items borrowed
  }
}
```

### Task 4: Implement Library System

```javascript
class LibrarySystem {
  #inventory;
  #members;
  #transactions;

  constructor() {
    // Initialize private collections
  }

  addMedia(media) {
    // Add media to inventory
    // Validate media is instance of Media class
  }

  addMember(member) {
    // Add member to system
    // Validate member is instance of LibraryMember
  }

  borrowMedia(memberId, mediaId) {
    // Handle borrowing process:
    // 1. Validate member exists and can borrow
    // 2. Validate media exists and is available
    // 3. Update inventory
    // 4. Update member's borrowed items
    // 5. Record transaction
    // Return transaction record
  }

  returnMedia(memberId, mediaId) {
    // Handle return process:
    // 1. Validate member has borrowed this item
    // 2. Update inventory
    // 3. Update member's borrowed items
    // 4. Record transaction
    // Return transaction record
  }

  generateReport() {
    // Return object with:
    // - Total items count by type
    // - Currently borrowed items
    // - Members with most borrowed items
  }
}
```

### Example Test Cases

```javascript
// Test Case 1: Creating and adding media
const library = new LibrarySystem();

const book1 = new Book("B001", "The Great Gatsby", 1925, 2, "F. Scott Fitzgerald", 180);
const magazine1 = new Magazine("M001", "National Geographic", 2023, 3, "January 2023", "NG Press");
const dvd1 = new DVD("D001", "Inception", 2010, 1, "Christopher Nolan", 148);

library.addMedia(book1);
library.addMedia(magazine1);
library.addMedia(dvd1);

// Test Case 2: Creating and managing members
const member1 = new LibraryMember("MEM001", "John Doe");
const member2 = new LibraryMember("MEM002", "Jane Smith");

library.addMember(member1);
library.addMember(member2);

// Test Case 3: Borrowing and returning
const transaction1 = library.borrowMedia("MEM001", "B001");
console.log(transaction1);
// Should print transaction details including timestamp

console.log(member1.getBorrowedItems().length === 1); // true
console.log(book1.isAvailable()); // true (1 copy still available)

const transaction2 = library.returnMedia("MEM001", "B001");
console.log(transaction2);
// Should print return transaction details

// Test Case 4: System report
const report = library.generateReport();
console.log(report);
// Should show inventory and borrowing statistics
```

### Error Cases

```javascript
// Invalid media creation
try {
  new Book("B002", "", 2023, 1, "Author", 100); // Error: "Title cannot be empty"
  new Magazine("M002", "Times", 1800, 1, "Issue 1", "Publisher"); // Error: "Year must be 1900 or later"
  new DVD("D002", "Movie", 2023, 0, "Director", 120); // Error: "Copies must be greater than 0"
} catch (e) {
  console.log(e.message);
}

// Invalid borrowing
try {
  library.borrowMedia("INVALID", "B001"); // Error: "Member not found"
  library.borrowMedia("MEM001", "INVALID"); // Error: "Media not found"
} catch (e) {
  console.log(e.message);
}

// Borrowing unavailable item
try {
  library.borrowMedia("MEM001", "D001");
  library.borrowMedia("MEM002", "D001"); // Error: "No copies available"
} catch (e) {
  console.log(e.message);
}

// Invalid returns
try {
  library.returnMedia("MEM001", "M001"); // Error: "Item not borrowed by this member"
} catch (e) {
  console.log(e.message);
}
```

### Notes:
- All validation errors should be thrown using the Error class
- Borrowing transactions should include timestamps
- Generate meaningful error messages for all validation failures
- Consider edge cases in inventory management
- Ensure proper privacy for sensitive data
- All date operations should use standard JavaScript Date object
- Numbers should be rounded to 2 decimal places where appropriate

---