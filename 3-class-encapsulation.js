/*
 Challenge #3 - Class Encapsulation
 Notes:
 - Run your code in browser console or Node.js
 - Use private fields (#) for data protection
 - Implement proper validation
 - Track transaction history
*/

class DigitalWallet {
  // Private fields
  #balance;
  #owner;
  #transactions;

  constructor(owner, initialBalance) {
    this.#owner = owner;
    this.#balance = initialBalance;
    this.#transactions = [];
  }

  // Private methods
  #addTransaction(type, amount, note) {
    if (!type || !amount || !note) {
      throw new Error("invalid data type for input");
    }
    this.#validateAmount();
    this.#transactions.push({
      type: type,
      amount: amount,
      note: note,
      date: Date.now()
    })
  }

  #validateAmount(amount) {
    if (amount)
      if (amount <= 0) {
        throw new Error("Amount must be positive1")
      }
  }
  // Public getter methods  
  getBalance() {
    return this.#balance;
  }

  getOwner() {
    return this.#owner;
  }

  getTransactions() {
    return this.#transactions;
  }

  // Transaction methods
  deposit(amount, note = "Deposit") {
    this.#addTransaction("deposit",amount,note);
  }

  withdraw(amount, note = "Withdrawal") {
    let balance = this.getBalance();
    if (balance >= amount){
      this.#addTransaction("withdraw", -amount, note);ƒ
    }
  }
}


// Test cases
try {
  console.log("Test Case 1: Create wallet");
  const wallet = new DigitalWallet("John Doe", 100);
  console.log(wallet.getBalance() === 100); // true
  console.log(wallet.getOwner() === "John Doe"); // true

  console.log("Test Case 2: Deposit");
  wallet.deposit(50, "Birthday money");
  console.log(wallet.getBalance() === 150); // true

  console.log("Test Case 3: Withdraw");
  wallet.withdraw(30, "Groceries");
  console.log(wallet.getBalance() === 120); // true

  console.log("Test Case 4: Transaction History");
  const history = wallet.getTransactions();
  console.log(history.length === 3); // true (initial, deposit, withdraw)

  console.log("Test Case 5: Validation");
  try {
    wallet.withdraw(1000); // Should throw error
  } catch (e) {
    console.log(e.message === "Insufficient funds"); // true
  }

  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error.message);
}