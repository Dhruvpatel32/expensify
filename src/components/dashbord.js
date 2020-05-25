import React from 'react';
import {Link} from 'react-router-dom';
import ExpenseList from './expenseList';
import ExpenseListFilterText from './expenseListTextFilter';
const ExpanseDashBordpage=()=>(
    <div className="container">
    <div className="add_b">
    <Link to="/create">
            <button className="button_d"> Add Expense</button>
        </Link>
        <data className="data"> Click on Expense To Edit</data>
    </div>
        
        <ExpenseListFilterText/>
        <ExpenseList/>

    </div>
);
export default ExpanseDashBordpage;