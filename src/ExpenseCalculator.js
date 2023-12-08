import React , {useState} from 'react';
import SavingsAdvice from './SavingsAdvice';




const ExpenseCalculator = (props) => {
  const [calculatorVisible, setCalculatorVisible] = useState(false); // State variable to control visibility

  // Function to show the ExpenseCalculator
  const showCalculator = () => {
    setCalculatorVisible(true);
  };


  
  
  if (!props.amount) {
    return null;
  }
  
  const totalExpenses = Object.values(props.amount).reduce(
    (total, amount) => total + parseFloat(amount || 0),
    0
  );

  let pincome = props.income ;
  const remainingBalance = pincome - totalExpenses;
  

let percentageSavings = remainingBalance/pincome  * 100;
   
  
    
  return (
    <div className='section'>
      <h2 className='header'>Expense Calculation</h2>
      <button className='button-cal' onClick={showCalculator}>Calculate Expenses</button>
      {calculatorVisible && (
        <>
      <p>Total Expenses: £{totalExpenses}</p>
        {/* Button to show the ExpenseCalculator */}
      <p>Remaining Balance: £{remainingBalance}</p>
      
      <p>Remaining percentage: {percentageSavings}%</p>
      <div className='section'>
      <h2 className='header'> Financial Advice</h2>
      <p><SavingsAdvice savings={percentageSavings}/></p>
    </div>
    </>
      )}
    </div>

  );
};

export default ExpenseCalculator;