import {editExpense,addExpense,removeById} from '../../actions/expense';

test('test to check remove expense action call',()=>{
    const action=removeById({id:"123abc"});
    expect(action).toEqual(
        {
            type:"REMOVE_EXPENSE",
            id:"123abc"
        }
    )
})
 
test ('test to chek wheter edit expenseis action call',()=>{
    const action=editExpense("123abc",{note:"this is note",add:"123"})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"123abc",
        update:{
            note:"this is note",
            add:"123"
        }
      
        }
    
   )
})

test ('test to check add expense action',()=>{
    const expense={
        description:"rent",
        amount:1200,
        createdAt:123333,
        note:"aaaa"
    };
    const action=addExpense(expense)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expenses:{
            ...expense,
            id:expect.any(String)
        }
    })
})

test ('test to check default add expense action',()=>{
    
    const action=addExpense()
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expenses:{
            description:"",
            note:"",
            createdAt:0,
            amount:0,
            id:expect.any(String)
        }
    })
})