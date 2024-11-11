# Challenge #3 - Class Encapsulation

### Notes:
- Run your code in browser console or Node.js
- Use private fields (#) for data protection
- Implement proper validation
- Track transaction history

### Requirements:

#### Private Fields:
- `#balance` (number): Current wallet balance
- `#owner` (string): Wallet owner name
- `#transactions` (array): List of transactions

#### Private Methods:
1. `#addTransaction(type, amount, note)`
   - Record transaction with type, amount, note, and date
   - Store in transactions history
   
2. `#validateAmount(amount)`
   - Validate amount is positive number
   - Return validated amount or throw error

#### Public Methods:
1. Getters:
   - `getBalance()`: Return current balance
   - `getOwner()`: Return owner name
   - `getTransactions()`: Return copy of transaction history

2. Transactions:
   - `deposit(amount, note)`: Add money to wallet
   - `withdraw(amount, note)`: Remove money if sufficient funds

### Validation Rules:
1. Amounts:
   - Must be positive numbers
   - Cannot withdraw more than balance
   - Initial balance cannot be negative

2. Transactions:
   - Must include type (deposit/withdraw)
   - Must include amount
   - Must include note/description
   - Must include date

### Error Messages:
- "Initial balance cannot be negative"
- "Amount must be positive"
- "Insufficient funds"

### Test Cases:
```javascript
// Test Case 1: Create wallet
const wallet = new DigitalWallet("John Doe", 100);
console.log(wallet.getBalance() === 100); // true
console.log(wallet.getOwner() === "John Doe"); // true

// Test Case 2: Deposit
wallet.deposit(50, "Birthday money");
console.log(wallet.getBalance() === 150); // true

// Test Case 3: Withdraw
wallet.withdraw(30, "Groceries");
console.log(wallet.getBalance() === 120); // true

// Test Case 4: Transaction History
const history = wallet.getTransactions();
console.log(history.length === 3); // true (initial, deposit, withdraw)
```

### Error Cases:
```javascript
// Should throw: "Initial balance cannot be negative"
const invalidWallet = new DigitalWallet("John Doe", -100);

// Should throw: "Amount must be positive"
wallet.deposit(-50);
wallet.withdraw(-30);

// Should throw: "Insufficient funds"
wallet.withdraw(1000);
```