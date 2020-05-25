import React from 'react';
import ExpanseForm from './expenseForm';
import {connect} from 'react-redux';
import {startAddExpanse } from '../actions/expense'
  export  class AddExpense extends React.Component{
    onSubmit=(expanse)=>{
        this.props.startAddExpanse (expanse);
        this.props.history.push("/")}
   render(){
       return (
        <div >
        <div className="container">
        <h1>Add Expanse</h1>
        </div>
        <div className="container">
        <ExpanseForm
            onSubmit={this.onSubmit}
            
        />
        </div>
        
    </div>
       )
   }     
}

const mapdispatchToProps=(dispatch)=>({
    startAddExpanse :(expanse)=>dispatch(startAddExpanse (expanse))
})
 export default connect(undefined,mapdispatchToProps)(AddExpense);