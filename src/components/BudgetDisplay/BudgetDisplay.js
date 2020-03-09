import React, { useState, useEffect } from 'react';
import './BudgetDisplay.css';
/**
* @author
* @function budgetDisplay
**/

const BudgetDisplay = (props) => {
    // const [net, setNet] = useState('0.00');
    // const [totalInc, setTotalInc] = useState('0.00');
    // const [totalExp, setTotalExp] = useState('0.00');
    // useEffect(()=>{
    //     fetch('https://budgethooks.firebaseio.com/transaction.json').then(response=> response.json())
    //         .then(res=>{
    //             let sumInc = 0.00;
    //             let sumExp = 0.00;
    //             let netValue = 0.00;
    //             for (const key in res){
    //                 if(res[key].type === 'inc'){
    //                     sumInc += Number(res[key].value);
    //                     netValue += Number(res[key].value);
    //                 }else {
    //                     sumExp += Number(res[key].value);
    //                     netValue -= Number(res[key].value);
    //                 }
    //             }
    //             sumInc = sumInc.toFixed(2);
    //             sumExp = sumExp.toFixed(2);
    //             netValue = netValue.toFixed(2);
    //             setTotalInc(String(sumInc));
    //             setTotalExp(String(sumExp));
    //             setNet(String(netValue));
    //         }).catch(err=> console.log(err));
    //   },[net, totalInc, totalExp]);

  return(
    <div className="display container-fluid p-1 d-flex flex-column justify-content-between align-items-center">
        <h5>Net</h5>
        <div className="net mb-2 ">
            $ {props.net}
        </div>
        <h5>Income</h5>
        <div className="income mb-2">
            $ {props.totalInc}
        </div>
        <h5>Expense</h5>
        <div className="expense mb-2">
            $ {props.totalExp}
        </div>
    </div>
   )

 }

export default BudgetDisplay;