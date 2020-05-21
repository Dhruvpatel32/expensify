import uuid from 'uuid';
import database from '../firebase/firebase'
export const editExpense=(id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update

})
export const starteditExpense=(id,update)=>{
   return  (dispatch,getState)=>{
    const uid=getState().auth.uid;   
    return database.ref(`users/${uid}/expenses/${id}`).update(update).then(
           ()=>{
               dispatch(editExpense(id,update));
           }
       )
   }
}
export const addExpense=(expenses)=>(
    {
        type:'ADD_EXPENSE',
        expenses
                
    }
);
export const startAddExpanse = (expenseData={})=>{
    return (dispatch,getState)=>{
        const uid =getState().auth.uid;
        const {
            description ='',
            note ='',
            amount = 0,
            createdAt =0
        }=expenseData;
        const expenses ={ description,note,amount,createdAt};
        database.ref(`users/${uid}/expenses`).push(expenses).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expenses
            }))
        })
        }
    }

export const removeById=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
)
export const startremoveexpense=({id}={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
       return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
           dispatch(removeById({id}));
       })
    }}

export const  setExpense =(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})
export const startsetExpense=()=>{
    return (dispatch,getState)=>{
        const uid =getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses =[];
            snapshot.forEach((childsnapshot)=>{
              expenses.push({
                  id:childsnapshot.key,
                  ...childsnapshot.val()
              })
            })
            dispatch(setExpense(expenses));
        })
    }
}