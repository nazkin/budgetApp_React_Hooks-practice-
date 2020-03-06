import React, { useState } from 'react';
import BudgetDisplay from '../components/BudgetDisplay/BudgetDisplay';
import ItemLists from '../components/ItemLists/ItemLists';
import './Budget.css';


const Budget = (props) => {
   const [type, setType] = useState("");
   const [desc, setDescription] = useState("");
   const [value, setValue] = useState("");
   const [transactions, setTransactions] = useState([]);

   const addTransactionHandler = (transaction)=> {
   setTransactions(prevTransactions=> [...prevTransactions,
         {id: Math.random().toString(),...transaction}
    
    ]);
   }

   const submitHandler = (event)=> {
       event.preventDefault();
       addTransactionHandler({type: type, description: desc, value: value })
   }
  return(
    
    <div>
        <BudgetDisplay />
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
        <ItemLists allTransactions={transactions} />
    </div>
   )

 }

export default Budget;