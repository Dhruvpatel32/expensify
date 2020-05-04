import uuid from 'uuid';
export const editExpense=(id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update

})
export const addExpense=({description ='',note ='',amount = 0,createdAt =0}={})=>(
    {
        type:'ADD_EXPENSE',
        expenses:{
         id:uuid(),
         description,
         note,
         amount,
         createdAt
        }
                
    }
);
export const removeById=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
)