import React, { useState, useEffect } from 'react';
import BudgetDisplay from '../components/BudgetDisplay/BudgetDisplay';
import ItemLists from '../components/ItemLists/ItemLists';
import './Budget.css';


const Budget = (props) => {
   const [type, setType] = useState("");
   const [desc, setDescription] = useState("");
   const [value, setValue] = useState("");
   const [transactions, setTransactions] = useState([]);
   const [net, setNet] = useState('0.00');
   const [totalInc, setTotalInc] = useState('0.00');
   const [totalExp, setTotalExp] = useState('0.00');

   useEffect(()=>{
    fetch('https://budgethooks.firebaseio.com/transaction.json').then(response=> response.json())
        .then(res=>{
            //Handling the List Info 
            const loadData = [];
            for (const key in res){
                loadData.push({
                    id: key,
                    type: res[key].type ,
                    description: res[key].description,
                    value: res[key].value
                })
            }
            //Handling the totals
            let sumInc = 0.00;
            let sumExp = 0.00;
            let netValue = 0.00;
            for (const key in res){
                if(res[key].type === 'inc'){
                    sumInc += Number(res[key].value);
                    netValue += Number(res[key].value);
                }else {
                    sumExp += Number(res[key].value);
                    netValue -= Number(res[key].value);
                }
            }
            sumInc = sumInc.toFixed(2);
            sumExp = sumExp.toFixed(2);
            netValue = netValue.toFixed(2);
            //Setting the appropriate states
            setTransactions(loadData);
            setTotalInc(String(sumInc));
            setTotalExp(String(sumExp));
            setNet(String(netValue));
        }).catch(err=> console.log(err));
  }, [transactions, net]);

   const addTransactionHandler = (transaction)=> {

        fetch('https://budgethooks.firebaseio.com/transaction.json', {
             method: "POST",
             body: JSON.stringify(transaction),
             headers: {'Content-Type': 'application/json'}
        }).then(response=> {
             return response.json()
        }).then(res=> {
            console.log(res);
            //  setTransactions(prevTransactions=> [...prevTransactions,
            //  {id: res.name,...transaction}
            //  ]);
        }).catch(err=> console.log(err));

   }

   const submitHandler = (event)=> {
       event.preventDefault();
       addTransactionHandler({type: type, description: desc, value: value });
       setType("");
       setDescription("");
       setValue("");
   }
  return(
    
    <div>
        <BudgetDisplay net={net} totalInc = {totalInc} totalExp = {totalExp}/>
        <div className="budget-form container-fluid my-1">
            <div className="row ">
                <div className="col-md-12 ">
                <form onSubmit={submitHandler} className="form-inline">
                    <div className="form-group mb-2 mx-5 ">
                        <label >Type (inc/exp)</label>
                        <input  type="text"
                                placeholder="inc / exp"
                                className="form-control-plaintext border"
                                value={type}
                                onChange={event=> setType(event.target.value)} />
                    </div>
                    <div className="form-group mb-2 mx-5 ">
                        <label >Description</label>
                        <input  type="text"
                                className="form-control-plaintext border"
                                value={desc}
                                onChange={event=> setDescription(event.target.value)} />
                    </div>
                    <div className="form-group mb-2 mx-5 ">
                        <label >Amount</label>
                        <input  type="text"
                                className="form-control-plaintext border "
                                value={value}
                                onChange={event=> setValue(event.target.value)}  />
                    </div>
                    <button type="submit" className="mx-5"><img  src="tick.png" width="35px"/></button>
                </form>
                </div>
            </div>
        </div>
        {/* allTransactions={transactions} */}
        <ItemLists transactions = {transactions} />
    </div>
   )

 }

export default Budget;