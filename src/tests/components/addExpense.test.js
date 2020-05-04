import React from 'react';
import{shallow} from 'enzyme';
import {AddExpense} from '../../components/addexpense';
const expense=
    {
        id:"1",
        description:"gum",
        amount:195,
        note:"",
        createdAt:0
    }

 let onSubmit,history,wrapper;
 beforeEach(()=>{
     onSubmit=jest.fn();
     history={push:jest.fn()};
     wrapper=shallow(<AddExpense onSubmit={onSubmit} history={history}/>);
 })   
test('should chek add expense ',()=>{
 
    expect(wrapper).toMatchSnapshot();
})
test('check submition of new form',()=>
{
     wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expense);


})