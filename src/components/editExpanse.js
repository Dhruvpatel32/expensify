import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {editExpense} from '../actions/expense';
import {removeById} from '../actions/expense';
export class editExpanse extends React.Component{
onSubmit=(expense)=>{
    this.props.dispatch(editExpense(this.props.expense.id,expense));
    this.props.history.push("/");}
onClick= ()=>{
    this.props.dispatch(removeById({id:this.props.expense.id}));
    this.props.history.push('/')}  
    render(){
        return (<div>
            <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit} />
       <button onClick={this.onClick}>Remove</button>
        </div>) ;
    } 
}



const mapStatetoProps=(state,props)=>{
    const expense=state.expense.find((expenses)=>  expenses.id===props.match.params.id )
    return {
        expense:expense
          
    };
};
export default connect(mapStatetoProps)(editExpanse);