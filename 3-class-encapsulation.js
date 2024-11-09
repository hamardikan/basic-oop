/*
  Challenge #3 - Class Encapsulation
  
  Notes:
  - Run your code in browser console or Node.js
  - Use private fields (#) for data protection
  - Implement proper validation for all operations
  - Keep track of PIN attempts for security
  - Maintain accurate transaction history
*/

class BankAccount {
    // Private fields
    #accountNumber;
    #accountHolder;
    #balance;
    #pin;
    #transactions;
    #isLocked;
    #pinAttempts;
  
    constructor(accountHolder, initialDeposit, pin) {
      // Your code here
    }
  
    // Private methods
    #generateAccountNumber() {
      // Your code here
    }
  
    #validateAccountHolder(holder) {
      // Your code here
    }
  
    #validateAmount(amount) {
      // Your code here
    }
  
    #addTransaction(type, amount, description, balanceAfter) {
      // Your code here
    }
  
    // Public getter methods
    getAccountNumber() {
      // Your code here
    }
  
    getBalance(pin) {
      // Your code here
    }
  
    getTransactions(pin, startDate, endDate) {
      // Your code here
    }
  
    // Account status methods
    isLocked() {
      // Your code here
    }
  
    validatePin(pin) {
      // Your code here
    }
  
    // Transaction methods
    deposit(amount, description) {
      // Your code here
    }
  
    withdraw(pin, amount, description) {
      // Your code here
    }
  
    transfer(pin, targetAccount, amount, description) {
      // Your code here
    }
  
    // Security methods
    changePin(oldPin, newPin) {
      // Your code here
    }
  
    lockAccount(pin) {
      // Your code here
    }
  
    unlockAccount(pin) {
      // Your code here
    }
  
    generateStatement(pin, startDate, endDate) {
      // Your code here
    }
  }
  
  // Test cases
  try {
    console.log('Test Case 1: Account Creation');
    const holder = {
      name: "John Doe",
      id: "ID123456",
      address: "123 Main St"
    };
    
    const account = new BankAccount(holder, 1000, "1234");
    console.log(account.getAccountNumber().startsWith('******')); // Should print: true
    console.log(account.getBalance("1234") === 1000); // Should print: true
  
    // Add more test cases from the markdown here
    // ...
  
    console.log('All test cases passed!');
  } catch (error) {
    console.error('Test failed:', error.message);
  }