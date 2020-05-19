import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "./Routes/AppRouter";
import {Provider} from "react-redux";
import './style/style.scss';
import 'normalize.css/normalize.css';
import storeConfig from './store/storeConfig';
import {startsetExpense} from './actions/expense';
import {setTextFilter} from './actions/filters';
import expenseReducer from './reducers/expenseReducer';
import visibleData from './selectors/expenses.js'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store=storeConfig();

const state=store.getState();
const viewData=visibleData(state.expense,state.filter);
console.log(viewData); 

const jsx=(
    <Provider store={store}>
       <AppRoute/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById("templet1"));
 store.dispatch(startsetExpense()).then(()=>{
    ReactDOM.render(jsx,document.getElementById("templet1"))
 })
;
   