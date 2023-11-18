import React, { useState } from 'react';
import ExpenseInput from './ExpenseInput.js';


function ExpenseSelection() {
  const [selectedExpenses, setSelectedExpenses] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);



  const handleExpenseChange = (expense) => {
    if (selectedExpenses.includes(expense)) {
      setSelectedExpenses(selectedExpenses.filter(item => item !== expense));
    } else {
      setSelectedExpenses([...selectedExpenses, expense]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };



   const expenses = [
    'Rent', 'Mortgage', 'Utilities', 'Groceries', 'Transportation', 'Healthcare', 'Insurance',
    'Entertainment', 'Dining Out', 'Gym Membership', 'Phone Bill', 'Internet Bill', 'Streaming Services',
    'Travel', 'Clothing', 'Personal Care', 'Education', 'Government Tax', 'Debt Payments', 'Miscellaneous',
  ];

  return (
    <div className='section'>
     <h1 class="header">Finance Evaluator App</h1>

      <h2 className='header'>Select Your Monthly Expenses</h2>
      <form onSubmit={handleSubmit}>
      {expenses.map((expense) => (
        <div key={expense} className='input-container'>
          <label className='label'>
            <input
             className='input-field'
              type="checkbox"
              checked={selectedExpenses.includes(expense)}
              onChange={() => handleExpenseChange(expense)}
            />
            {expense.charAt(0).toUpperCase() + expense.slice(1)}
          </label>
        </div>
      ))}
        <button type="submit" className='button'>Submit</button>
      </form>
      {formSubmitted && <ExpenseInput selectedExpenses={selectedExpenses} />}
    </div>
  );
}

export default ExpenseSelection;

