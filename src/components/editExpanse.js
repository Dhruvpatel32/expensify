import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {starteditExpense} from '../actions/expense';
import {startremoveexpense} from '../actions/expense';
export class editExpanse extends React.Component{
onSubmit=(expense)=>{
    this.props.dispatch(starteditExpense(this.props.expense.id,expense));
    this.props.history.push("/");}
onClick= ()=>{
    this.props.dispatch(startremoveexpense({id:this.props.expense.id}));
    this.props.history.push('/')}  
    render(){
        return (<div>
           
            <div className="container">
            <h1>Edit Expense</h1>
            <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit} />
       <button onClick={this.onClick} className="remove_button">Remove Expense</button>
            </div>
        </div>
        ) ;
    } 
}



const mapStatetoProps=(state,props)=>{
    const expense=state.expense.find((expenses)=>  expenses.id===props.match.params.id )
    return {
        expense:expense
          
    };
};
export default connect(mapStatetoProps)(editExpanse);