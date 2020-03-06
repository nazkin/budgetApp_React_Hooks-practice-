import React, {useState} from 'react';
import './ItemLists.css';
/**
* @author
* @function ItemLists
**/

const ItemLists = (props) => {
    
  return(
    <div className="container my-2">
        <div className="row">
            <div className="incomes col-md-6 border-right border-left text-center">
                <h3>Incomes</h3>
                <ul>
                    {props.allTransactions.map(tr=>{
                        if(tr.type == 'inc'){
                            return(<li className="float-left" key={tr.id}>
                                        <span className="mx-3">+</span>
                                        <span className="mx-3">USD$ {tr.value}</span>
                                        <span className="mx-3">{tr.description}</span>
                                    </li>
                            )

                        }
                    })}
                </ul>
            </div>
            <div className="expenses col-md-6 border-right">
                <h3>Expenses</h3>
                <ul>
                    {props.allTransactions.map(tr=>{
                        if(tr.type == 'exp'){
                            return(<li className="float-left" key={tr.id}>
                                        <span className="mx-3">-</span>
                                        <span className="mx-3">USD$ {tr.value}</span>
                                        <span className="mx-3">{tr.description}</span>
                                    </li>
                            )

                        }
                    })}
                </ul>
            </div>
        </div>
    </div>
   )

 }

export default ItemLists;