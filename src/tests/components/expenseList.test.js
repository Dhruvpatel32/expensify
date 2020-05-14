import React from 'react';
import {ExpenseList} from '../../components/expenseList';
import {shallow} from 'enzyme';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';
const expense=[
    {
        id:"1",
        description:"gum",
        amount:195,
        note:"",
        createdAt:0
    },
   {
        id:"2",
        description:"rent",
        amount:19500,
        note:"",
        createdAt:moment(0).subtract(4,'day').valueOf()
    },
    {
        id:"3",
        description:"credit cacrd",
        amount:495,
        note:"",
        createdAt:moment(0).add(4,'day').valueOf()
    }
];
test('should render expenseList',()=>{
    const wrapper=shallow(<ExpenseList expense={expense}/>)
    expect(wrapper).toMatchSnapshot();
})
test('should render expenseList when there is no expense',()=>{
    const wrapper=shallow(<ExpenseList expense={[]}/>)
    expect(wrapper).toMatchSnapshot();
})
