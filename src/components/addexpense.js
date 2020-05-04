import React from 'react';
import ExpanseForm from './expenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expense'
  export  class AddExpense extends React.Component{
    onSubmit=(expanse)=>{
        this.props.onSubmit(expanse);
        this.props.history.push("/")}
   render(){
       return (
        <div>
        <h1>Add Expanse</h1>
        <ExpanseForm
            onSubmit={this.onSubmit}
            
        />
    </div>
       )
   }     
}

const mapdispatchToProps=(dispatch)=>({
    onSubmit:(expanse)=>dispatch(addExpense(expanse))
})
 export default connect(undefined,mapdispatchToProps)(AddExpense);