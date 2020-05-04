import React from 'react';
import Expenselist from '../../components/expenseListItems';
import {shallow} from 'enzyme';
import moment from 'moment';
const expense=
    {
        id:"1",
        description:"gum",
        amount:195,
        note:"",
        createdAt:0
    }
;
test('should render expense list',()=>{
    const wrapper=shallow(<Expenselist {...expense} />)
    expect(wrapper).toMatchSnapshot();
})