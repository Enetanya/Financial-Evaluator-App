import React, { useState } from 'react';
import ExpenseCalculator from './ExpenseCalculator.js';


function ExpenseInput (props) {
  const [expenseAmounts, setExpenseAmounts] = useState({});
  const [monthlyIncome, setMonthlyIncome] = useState(0);

  const handleAmountChange = (expense, amount) => {
  
    setExpenseAmounts((prevAmounts) => ({
      ...prevAmounts,
      [expense]: amount
    }));
  };

  let selected = props.selectedExpenses;
  if (!selected) {
  return null;
}


return (
    <div className='section'>
      <h2 className='header'>Enter Monthly Net Income and Expense Amounts</h2>
      {/* Input fields for monthly income */}
      <label className='label'>
        Monthly Net Income: £
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          className='input-field'
        />
      </label>
      {/* Loop through selected expenses and generate input fields */}
      {selected.map((expense) => (
        <div key={expense} className='input-container'>
          <label className='label'>
            {expense.charAt(0).toUpperCase() + expense.slice(1)}:£
            <input
              type="number"
              value={expenseAmounts[expense]}
              onChange={(e) => handleAmountChange(expense, e.target.value)}
              className='input-field'
              required
            />
          </label>
        </div>
      ))}
      
      <ExpenseCalculator amount={expenseAmounts} income={monthlyIncome}/>
    </div>
  );
};

export default ExpenseInput;