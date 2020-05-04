import React from "react";
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/expenseForm';
import moment from "moment";
import {SingleDatePicker } from 'react-dates';

const expense=
    {
        id:"1",
        description:"gum",
        amount:195,
        note:"",
        createdAt:0
    }
;test('should render expense form',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})
test('should render expense form',()=>{
    const wrapper=shallow(<ExpenseForm expense={expense}/>);
    expect(wrapper).toMatchSnapshot();
})
test ('should chek form submit methode',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})
test('should setup description on change',()=>{
    const value='new description';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
})
test('should setup note on change',()=>{
    const value='new description';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})
test('should setup valid amount on change',()=>{
    const value='12.2';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
})
test('should setup valid amount on change',()=>{
    const value='12.222';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');
})
test('shold call onSubmitForm with valid data',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expense.description,
        amount:expense.amount,
        note:expense.note,
        createdAt:expense.createdAt
    })

})
test('should set new date on date change',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
})
test ('should change focused on focused change',()=>{
    const focused=true;
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('focused')).toBe(focused);

})