import React from 'react';
import {shallow} from 'enzyme';
import Notfound from '../../components/notfound';
test('should render Header',()=>{
   const wrapper=shallow(<Notfound />)
  expect(wrapper).toMatchSnapshot();
})