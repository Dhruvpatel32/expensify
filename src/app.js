import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "./Routes/AppRouter";
import {Provider} from "react-redux";
import './style/style.scss';
import 'normalize.css/normalize.css';
import storeConfig from './store/storeConfig';
import {addExpense} from './actions/expense';
import {setTextFilter} from './actions/filters';
import expenseReducer from './reducers/expenseReducer';
import visibleData from './selectors/expenses.js'
import 'react-dates/lib/css/_datepicker.css';
const store=storeConfig();

store.dispatch(addExpense(({description:"water bill",amount:500})));
store.dispatch(addExpense(({description:"light bill",amount:300,createdAt:20})));
store.dispatch(addExpense(({description:"rent",amount:30,createdAt:1000})));




const state=store.getState();
const viewData=visibleData(state.expense,state.filter);
console.log(viewData); 

const jsx=(
    <Provider store={store}>
       <AppRoute/>
    </Provider>
)


 
ReactDOM.render(jsx,document.getElementById("templet1"));
   