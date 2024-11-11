// Do not modify class names and method signatures
// Implement the methods according to the challenge description

class Media {
    constructor(id, title, year, copies) {
        // TODO: Implement constructor
        // Validate:
        // - id must be string
        // - title must be non-empty string
        // - year must be >= 1900
        // - copies must be > 0
        if (typeof id !== 'string') {
            throw new Error("id must be string.");
        };
        if (typeof title !== 'string' || title.length === 0) {
            throw new Error("title must be non-empty string");
        };
        if (typeof year !== 'number' || year < 1900) {
            throw new Error("year must be >= 1900");
        };
        if (typeof copies !== 'number' || copies <= 0) {
            throw new Error("Copies must be more than zero!");
        };
        this.id = id;
        this.title = title;
        this.year = year;
        this.copies = copies;
    }

    getDuration() {
        throw new Error("getDuration() must be implemented");
    }

    getType() {
        throw new Error("getType() must be implemented");
    }

    isAvailable() {
        return this.copies > 0;
    }
}

class Book extends Media {
    constructor(id, title, year, copies, author, pages) {
        // TODO: Implement constructor
        super(id, title, year, copies)
        if (pages <= 0) {
            throw new Error("pages must be > 0");
        }
        this.pages = pages;
        this.author = author;
        // Additional validation: pages must be > 0
    }

    getDuration() {
        // TODO: Implement method
        // Returns estimated reading time (pages * 2 minutes)
        return `${this.pages * 2} minutes`;
    }

    getType() {
        // TODO: Implement method
        // Returns "Book"
        return "Book";
    }
}

class Magazine extends Media {
    constructor(id, title, year, copies, issue, publisher) {
        // TODO: Implement constructor
        // Additional validation: issue must be non-empty
        super(id, title, year, copies);
        if (!issue) {
            throw new Error("Issue must be non empty!");
        };
        this.issue = issue;
        this.publisher = publisher;
    }

    getDuration() {
        // TODO: Implement method
        return "30 minutes";
    }

    getType() {
        // TODO: Implement method
        return "Magazine"
    }
}

class DVD extends Media {
    constructor(id, title, year, copies, director, runtime) {
        // TODO: Implement constructor
        // Additional validation: runtime must be > 0
        super(id, title, year, copies);
        if (runtime <= 0) {
            throw new Error("Runtime must be > 0");
        }
        this.director = director;
        this.runtime = runtime;
    }

    getDuration() {
        // TODO: Implement method
        // Returns runtime in minutes
        return `${this.runtime} minutes`
    }

    getType() {
        // TODO: Implement method
        // Returns "DVD"
        return "DVD"
    }
}

class LibraryMember {
    #id;
    #name;
    #borrowedItems;
    #borrowHistory;

    constructor(id, name) {
        // TODO: Implement constructor
        // Initialize private fields
        this.#id = id;
        this.#name = name;
        // Validate id and name
        if (!name || !id) {
            throw new Error("Invalid name and id")
        }
        // Initialize empty arrays for borrowed items and history
        this.#borrowedItems = [];
        this.#borrowHistory = [];
    }

    getId() {
        // TODO: Implement getter
        return this.#id
    }

    getName() {
        // TODO: Implement getter
        return this.#name
    }

    getBorrowedItems() {
        // TODO: Implement getter
        // Return copy of borrowed items array
        return this.#borrowedItems
    }

    getBorrowHistory() {
        // TODO: Implement getter
        // Return copy of history array
        return this.#borrowHistory
    }

    canBorrow() {
        // TODO: Implement method
        // Returns true if member has less than 3 items borrowed
        if (this.#borrowedItems.length <= 3) {
            return true;
        } else {
            return false;
        }
    }
}

class LibrarySystem {
    #inventory;
    #members;
    #transactions;

    constructor() {
        // TODO: Initialize private collections
        this.#inventory = [];
        this.#members = [];
        this.#transactions = [];
    }

    addMedia(media) {
        // TODO: Implement method
        // Validate media is instance of Media class
        // Add to inventory if valid
        if (media instanceof Media) {
            this.#inventory.push(media);
        } else {
            throw new Error("Can only receive Media instances");
        }
    }

    addMember(member) {
        // TODO: Implement method
        // Validate member is instance of LibraryMember
        // Add to members if valid
        if (member instanceof LibraryMember) {
            this.#members.push(member);
        } else {
            throw new Error("Can only receive Library Member instances");
        }
    }

    borrowMedia(memberId, mediaId) {
        // TODO: Implement method
        // 1. Validate member exists and can borrow
        // 2. Validate media exists and is available
        // 3. Update inventory
        // 4. Update member's borrowed items
        // 5. Record transaction
        // Return transaction record
        const member = this.#members.find(m => m.getId() === memberId);
        const media = this.#inventory.find(m => m.id === mediaId);

        if (!member) throw new Error("Member not found!");
        if (!media) throw new Error("Media not found!");

        if (!member.canBorrow()) {
            throw new Error("Member has reached borrowing limit!");
        }

        if (!media.isAvailable()) {
            throw new Error("No Copies available");
        }

        const transaction = {
            type: 'borrow',
            memberId: memberId,
            mediaId: mediaId,
            timestamp: new Date(),
            mediaType: media.getType()
        }

        media.copies--;

        member.getBorrowedItems().push({
            mediaId: mediaId,
            borrowDate: new Date(),
            mediaType: media.getType()
        })

        this.#transactions.push(transaction);

        return transaction;
    }

    returnMedia(memberId, mediaId) {
        // TODO: Implement method
        // 1. Validate member has borrowed this item
        // 2. Update inventory
        // 3. Update member's borrowed items
        // 4. Record transaction
        // Return transaction record
        const member = this.#members.find(m => m.getId() === memberId);
        const media = this.#inventory.find(m => m.id === mediaId);

        if (!member) throw new Error("Member not found!");
        if (!media) throw new Error("Media not found!");

        const borrowedItem = member.getBorrowedItems().find(m => m.mediaId === mediaId);
        if (!borrowedItem) {
            throw new Error("Item is not borrowed by this member!");
        }

        const transaction = {
            type: 'return',
            memberId: memberId,
            mediaId: mediaId,
            timestamp: new Date(),
            mediaType: media.getType()
        };

        media.copies++;

        const borrowedItems = member.getBorrowedItems();
        const itemIndex = borrowedItems.findIndex(item => item.mediaId === mediaId);
        borrowedItems.splice(itemIndex, 1);

        member.getBorrowHistory().push({
            mediaId: mediaId,
            returnDate: new Date(),
            mediaType: media.getType()
        });

        this.#transactions.push(transaction);

        return transaction;
    }

    generateReport() {
        // Calculate inventory counts
        const inventory = {
            books: 0,
            magazines: 0,
            dvds: 0
        };

        this.#inventory.forEach(media => {
            const type = media.getType().toLowerCase() + 's';
            if (type in inventory) {
                inventory[type] += media.copies;
            }
        });

        // Get currently borrowed items
        const borrowedItems = this.#members.reduce((items, member) => {
            return items.concat(member.getBorrowedItems().map(item => ({
                memberId: member.getId(),
                memberName: member.getName(),
                ...item
            })));
        }, []);

        // Calculate top borrowers
        const borrowerStats = {};
        this.#members.forEach(member => {
            borrowerStats[member.getId()] = {
                id: member.getId(),
                name: member.getName(),
                totalBorrowed: member.getBorrowHistory().length + member.getBorrowedItems().length
            };
        });

        const topBorrowers = Object.values(borrowerStats)
            .sort((a, b) => b.totalBorrowed - a.totalBorrowed)
            .slice(0, 3); // Get top 3 borrowers

        return {
            inventory,
            borrowedItems,
            topBorrowers
        };
    }
}

// Example test cases below
// Uncomment and run to test your implementation


try {
  // Create library system
  const library = new LibrarySystem();
 
  // Create and add media
  const book1 = new Book("B001", "The Great Gatsby", 1925, 2, "F. Scott Fitzgerald", 180);
  const magazine1 = new Magazine("M001", "National Geographic", 2023, 3, "January 2023", "NG Press");
  const dvd1 = new DVD("D001", "Inception", 2010, 1, "Christopher Nolan", 148);
 
  library.addMedia(book1);
  library.addMedia(magazine1);
  library.addMedia(dvd1);
 
  // Create and add members
  const member1 = new LibraryMember("MEM001", "John Doe");
  const member2 = new LibraryMember("MEM002", "Jane Smith");
 
  library.addMember(member1);
  library.addMember(member2);
 
  // Test borrowing
  console.log("Testing borrow:");
  const transaction1 = library.borrowMedia("MEM001", "B001");
  console.log(transaction1);
  console.log("Member1 borrowed items:", member1.getBorrowedItems());
  console.log("Book1 available:", book1.isAvailable());
 
  // Test returning
  console.log("\nTesting return:");
  const transaction2 = library.returnMedia("MEM001", "B001");
  console.log(transaction2);
  console.log("Member1 borrowed items:", member1.getBorrowedItems());
 
  // Test report generation
  console.log("\nLibrary Report:");
  console.log(library.generateReport());
 
} catch (error) {
  console.error("Test failed:", error.message);
}


module.exports = {
    Media,
    Book,
    Magazine,
    DVD,
    LibraryMember,
    LibrarySystem
};