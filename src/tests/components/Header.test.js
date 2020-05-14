import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';
test('should render Header',()=>{
   const wrapper=shallow(<Header/>)
  expect(wrapper).toMatchSnapshot();
})