import React from 'react';
import {shallow} from 'enzyme';
import ExpanseDashBordpage from '../../components/dashbord';
test('should render Header',()=>{
   const wrapper=shallow(<ExpanseDashBordpage/>)
  expect(wrapper).toMatchSnapshot();
})