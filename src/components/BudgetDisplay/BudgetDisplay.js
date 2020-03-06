import React, { useState } from 'react';
import './BudgetDisplay.css';
/**
* @author
* @function budgetDisplay
**/

const BudgetDisplay = (props) => {
   
  return(
    <div className="display container-fluid p-1 d-flex flex-column justify-content-between align-items-center">
        <h5>Net</h5>
        <div className="net mb-2 ">
            $ 1, 123.50
        </div>
        <h5>Income</h5>
        <div className="income mb-2">
            $ 2, 123.50
        </div>
        <h5>Expense</h5>
        <div className="expense mb-2">
            $ 1, 000.50
        </div>
    </div>
   )

 }

export default BudgetDisplay;