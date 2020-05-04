import React from 'react';
import moment from 'moment';
import {SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      description:props.expense?props.expense.description:"",
      note:props.expense?props.expense.note:"",
      amount:props.expense?(props.expense.amount/100).toString():"",
      createdAt:props.expense?moment(props.expense.createdAt):moment(),
      focused:false,
      error:"" 
    }
  }
 
  
 
 onnotechange=(e)=>{
     const note=e.target.value;
     this.setState(()=>({note}));
 }
 ondescriptionchange=(e)=>{
   const description=e.target.value;
   this.setState(()=>({
       description
   }))
 }
 onamountchange=(e)=>{
   const amount=e.target.value;
   if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
       this.setState(()=>({amount}));
   }
 }
 onDateChange=(createdAt)=>{
      if(createdAt){
        this.setState(()=>({createdAt}))
      }
 }
 onFocusChange=({focused})=>{
     this.setState(()=>({focused}))

 }
 onSubmit=(e)=>{
     e.preventDefault();
     if(!this.state.description||!this.state.amount){
         this.setState(()=>({error:"please enter description and amount"}))
     }
     else{
         this.setState(()=>({error:""}))
         this.props.onSubmit(({
             description:this.state.description,
             amount:parseFloat(this.state.amount,10)*100,
             createdAt:this.state.createdAt.valueOf(),
             note:this.state.note
         }))
     }
 }
    render(){
  return (
      <div>
          {this.state.error&&<p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
              <input 
              type="text"
              placeholder="Description"
              autoFocus
              onChange={this.ondescriptionchange}
              value={this.state.description}
              /> 
              <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onamountchange}/>
              <SingleDatePicker  
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.focused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
              />
              <textarea placeholder="Note(optional)" onChange={this.onnotechange} value={this.state.note}/>
              <button>Add Expense</button>
              
          </form>
      </div>
  )  
}}