import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListitems';
import selectExpenses from '../selectors/expenses';


 

export const  ExpenseList=(props)=>(
    <div>
        <h1>Expense list</h1>
       {
        props.expense.length===0 ?
        <p>no expense are avaliable</p>:
        
            props.expense.map((state)=>{
             return <ExpenseListItem key={state.id}{...state}/>
            })
        
       }
        
      
    </div>
)
export const mapStatetoProps=(state)=>{
    return {
       
        expense:selectExpenses(state.expense,state.filter)
        
    };
}
export  default connect(mapStatetoProps)(ExpenseList);
