import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilterText from './expenseListTextFilter';
const ExpanseDashBordpage=()=>(
    <div>
        <ExpenseListFilterText/>
        <ExpenseList/>

    </div>
);
export default ExpanseDashBordpage;