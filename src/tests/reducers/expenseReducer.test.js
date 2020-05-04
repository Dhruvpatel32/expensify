import expenseReducer from '../../reducers/expenseReducer';
import moment from 'moment';

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
test('should check default expense reducer',()=>{
    const state=expenseReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual([]);
})
test('should remove expense',()=>{
    const action=expenseReducer(expense,{type:"REMOVE_EXPENSE",id:expense[1].id})
    expect(action).toEqual([expense[0],expense[2]])
})
test('should remove expense if id doesnt found',()=>{
    const action=expenseReducer(expense,{type:"REMOVE_EXPENSE",id:-1})
    expect(action).toEqual(expense)
})
test('should add new expense',()=>{
    const expenses={
        id:'4',
        description:"new",
        amount:1234,
        createdAt:moment(1),
        note:"" 
};
const action={
    type:"ADD_EXPENSE",
    expenses:expenses
}
const anyaction=expenseReducer(expense,action);
expect(anyaction).toEqual([...expense,expenses])
}
)
test ('should edit expense',()=>{
    const update={
        id:expense[1].id,
        description:"updates",
        amount:12345,
        createdAt:moment(2),
        note:""
    }
    const action={
        type:"EDIT_EXPENSE",
        id:expense[1].id,
        update
    }
  const state=expenseReducer(expense,action)  
 expect(state).toEqual([expense[0],update,expense[2]])
})

test ('should edit expense if id not found',()=>{
    const update={
        id:expense[1].id,
        description:"updates",
        amount:12345,
        createdAt:moment(2),
        note:""
    }
    const action={
        type:"EDIT_EXPENSE",
        id:-1,
        update
    }
  const state=expenseReducer(expense,action)  
 expect(state).toEqual(expense)
})