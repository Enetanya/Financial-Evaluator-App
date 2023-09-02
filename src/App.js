import React, { useState } from 'react';
import ExpenseSelection from './ExpenseSelection.js';
import ExpenseInput from './ExpenseInput.js';
import ExpenseCalculator from './ExpenseCalculator.js';
import './index.css';


function App() {
  const [isRendering, setIsRendering] = useState(true);

   // Function to turn rendering on
   const handleRenderingOn = () => {
    setIsRendering(true);
  };

  // Function to turn rendering off
  const handleRenderingOff = () => {
    setIsRendering(false);
  };

return (
    <div className="App">
      {/* Buttons to control rendering */}
       <div>
        <button className='button' onClick={handleRenderingOn }>On</button>
        <button className='button-terminate' onClick={handleRenderingOff}>Off</button>
      </div>
        {/* Render components based on the rendering state */}
      {isRendering && (
        <>
          <ExpenseSelection />
          <ExpenseInput />
          <ExpenseCalculator />
        </>
      )}
     
    </div>
  );
}

export default App;