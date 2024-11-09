# #3 - Class Encapsulation
---
## Objectives

- Implement proper data encapsulation using private fields
- Create and use getter/setter methods
- Handle data validation within classes
- Use encapsulation to maintain data integrity
- Implement transaction history tracking

### RESTRICTION
- Function and method names must be exactly as specified
- Must use private fields (with #) for data protection
- All data access must be through methods
- No direct property modifications from outside
- Cannot expose private data directly

### HINTS
- Use # prefix for private fields
- Implement getters/setters as needed
- Validate all data modifications
- Keep transaction history secure
- Consider what data should be private vs public

---

## Directions

Help SecureBank implement a robust banking system that protects customer data and maintains transaction integrity. The system needs to handle different account types while ensuring all operations are secure and validated.

### Task 1: Create BankAccount Class

Create a `BankAccount` class with secure data management:

```javascript
class BankAccount {
  // Private fields
  #accountNumber;
  #accountHolder;
  #balance;
  #pin;
  #transactions;
  #isLocked;

  constructor(accountHolder, initialDeposit, pin) {
    // Initialize account with validation
  }
}
```

Private Fields:
- `#accountNumber` (string): Auto-generated 10-digit number
- `#accountHolder` (object): {name, id, address}
- `#balance` (number): Current balance (must be ≥ 0)
- `#pin` (string): 4-digit PIN for security
- `#transactions` (array): Transaction history
- `#isLocked` (boolean): Account lock status

### Task 2: Implement Access Methods

Create secure methods for data access:

```javascript
// Getters
getAccountNumber() {
  // Returns masked account number (e.g., "****1234")
}

getBalance(pin) {
  // Returns balance if PIN matches
}

getTransactions(pin, startDate, endDate) {
  // Returns filtered transactions if PIN matches
}

// Account Status
isLocked() {
  // Returns lock status
}

// Validation
validatePin(pin) {
  // Validates PIN, handles lock after 3 failed attempts
}
```

### Task 3: Implement Transaction Methods

Add methods for account operations:

```javascript
deposit(amount, description) {
  // Adds money to account
  // Records transaction
  // Returns new balance
}

withdraw(pin, amount, description) {
  // Removes money if PIN valid and funds available
  // Records transaction
  // Returns new balance
}

transfer(pin, targetAccount, amount, description) {
  // Transfers money between accounts
  // Records transaction in both accounts
  // Returns status object
}
```

### Task 4: Implement Security Methods

Add account security features:

```javascript
changePin(oldPin, newPin) {
  // Changes PIN after validation
}

lockAccount(pin) {
  // Locks account if PIN matches
}

unlockAccount(pin) {
  // Unlocks account if PIN matches
}

generateStatement(pin, startDate, endDate) {
  // Generates account statement for date range
}
```

### Example Test Cases

```javascript
// Test Case 1: Account Creation
const holder = {
  name: "John Doe",
  id: "ID123456",
  address: "123 Main St"
};
const account = new BankAccount(holder, 1000, "1234");
console.log(account.getAccountNumber()); // "******1234"
console.log(account.getBalance("1234")); // 1000

// Test Case 2: Transactions
console.log(account.deposit(500, "Salary")); // 1500
console.log(account.withdraw("1234", 200, "Rent")); // 1300
console.log(account.getBalance("1234")); // 1300

// Test Case 3: Transaction History
const transactions = account.getTransactions("1234", "2024-01-01", "2024-12-31");
console.log(transactions);
/* Expected output:
[
  {
    type: "deposit",
    amount: 500,
    description: "Salary",
    date: "2024-...",
    balance: 1500
  },
  {
    type: "withdraw",
    amount: 200,
    description: "Rent",
    date: "2024-...",
    balance: 1300
  }
]
*/

// Test Case 4: Security
console.log(account.validatePin("9999")); // false
console.log(account.validatePin("9999")); // false
console.log(account.validatePin("9999")); // false and account locked
console.log(account.withdraw("1234", 100, "Test")); // Error: Account locked

// Test Case 5: PIN Change
console.log(account.changePin("1234", "5678")); // true
console.log(account.getBalance("1234")); // Error: Invalid PIN
console.log(account.getBalance("5678")); // 1300
```

### Error Cases to Handle

1. Constructor validation:
```javascript
// Should throw error: "Initial deposit must be positive"
const account1 = new BankAccount(holder, -100, "1234");

// Should throw error: "PIN must be 4 digits"
const account2 = new BankAccount(holder, 1000, "12345");

// Should throw error: "Invalid account holder data"
const account3 = new BankAccount({name: "John"}, 1000, "1234");
```

2. Transaction validation:
```javascript
const account = new BankAccount(holder, 1000, "1234");

// Should throw error: "Amount must be positive"
account.deposit(-100, "Test");

// Should throw error: "Insufficient funds"
account.withdraw("1234", 2000, "Test");

// Should throw error: "Invalid PIN"
account.withdraw("9999", 100, "Test");
```

3. Security validation:
```javascript
// Should throw error: "New PIN must be different"
account.changePin("1234", "1234");

// Should throw error: "Invalid date range"
account.getTransactions("1234", "2025-01-01", "2024-01-01");

// Should throw error: "Account is locked"
// (After 3 failed PIN attempts)
account.withdraw("1234", 100, "Test");
```

### Required Validations

1. Account Holder:
   - Must have name (string)
   - Must have ID (string)
   - Must have address (string)
   - All fields must be non-empty

2. PIN:
   - Must be exactly 4 digits
   - Must be string type
   - New PIN must be different from old PIN
   - Account locks after 3 failed attempts

3. Transactions:
   - Amount must be positive number
   - Description cannot be empty
   - Sufficient funds for withdrawals
   - Valid date ranges for history

4. Account Number:
   - Auto-generated 10 digits
   - Only last 4 digits visible
   - Unique per account

### Notes:
- Use `Date.now()` for timestamps
- All amounts should be in cents to avoid floating-point issues
- Transaction history should be immutable
- PIN attempts should reset after successful validation
- Include transaction fees: 0.5% for withdrawals, 1% for transfers
- Generate proper error messages for all validation failures