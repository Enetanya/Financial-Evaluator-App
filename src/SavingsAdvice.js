import {yourFinancialStatus} from './Advice Array.js';


let advice = yourFinancialStatus;

function SavingsAdvice (props) {
  let save = props.savings;
  
  
        if (!advice && !save) {
        return null;}

        if (save >= 50) {  
          return advice[0];
        
        } else if (save >= 30 && save < 50 ) {
          return advice[1];
        
        } else if (save >= 10 && save< 30 ) {
          return advice[2];
        
        } else if (save < 10) {
          return advice[3];
        } 
        else {
          return `Please choose your monthly expences from the list above 
          so you can be rated and adviced accordingly.`
        }
      }

  export default SavingsAdvice;

