import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListitems';
import selectExpenses from '../selectors/expenses';


 

export const  ExpenseList=(props)=>(
    <div classname="container">
    <h1>Expense list</h1>
    <div className="list_header">
        <div className="show_mobile">Expenses</div>
        <div className="show_desktop">Expense</div>
        <div className="show_desktop">Amount</div>
    </div>
        
       <div className="list_body">
       {
        props.expense.length===0 ?
       <div className="list_i list_in">
       no expense are avaliable
       </div>:
        
            props.expense.map((state)=>{
             return <ExpenseListItem key={state.id}{...state}/>
            })
        
       }
       </div>
        
      
    </div>
)
export const mapStatetoProps=(state)=>{
    return {
       
        expense:selectExpenses(state.expense,state.filter)
        
    };
}
export  default connect(mapStatetoProps)(ExpenseList);
