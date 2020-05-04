 import {createStore,combineReducers} from 'redux';
 import uuid from 'uuid';
 //default values
 const defaultfilterReducerstate={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
}
const defaultexpenseReducer=[];
//reducers
const expensesReducer=(state=defaultexpenseReducer,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return  [...state,action.expenses];
        case 'REMOVE_EXPENSE' :
            return state.filter(({id})=>{
                return id!==action.id;
            })
        case 'EDIT_EXPENSE':
             return state.map((expense)=>{
                 if(expense.id===action.id){
                   return {
                        ...expense,...action.update
                    }
                   }
                 else{
                     return expense;
                 }
             }) 
         
        default :
         return  state
    }
}

const filterReducer=(state=defaultfilterReducerstate,action)=>{
 switch(action.type){
     case 'setTextFilter' :
        return {
            ...state,
            text:action.text
        };
      case 'SORT_BY_AMOUNT':
       return  {
           ...state,sortBy:"amount"
       }
       case 'SORT_BY_DATE':
        return  {
            ...state,sortBy:"date"
        }
        case 'SELECT_START_DATE':
          return{
              ...state,startDate:action.startdate
          }  
          case 'SELECT_END_DATE':
            return{
                ...state,endDate:action.enddate
            }    
     default :
     return state;
 }
}
//store
const store= createStore(
    combineReducers(({
        expense :expensesReducer,
        filter :filterReducer})));
        
//action creator
const removeById=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
)
const editExpense=(id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update

})
const setTextFilter=(text="")=>({
    type:'setTextFilter',
     text
})
const addExpense=({description ='',note ='',amount = 0,createdAt =0}={})=>(
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
const sortByAmount=()=>({
 type:'SORT_BY_AMOUNT'
})
const sortBydate=()=>({
    type:'SORT_BY_DATE'
   })
const setStartDate=(startdate)=>({
    type:'SELECT_START_DATE',
    startdate
})
const setEndDate=(enddate)=>({
    type:'SELECT_END_DATE',
    enddate
})
const visibleData=(expense,{text,sortBy,startDate,endDate}={})=>{
    return expense.filter((expenses)=>{
      const startdateMatch= typeof startDate !=='number'|| expenses.createdAt>=startDate;
      const enddatematch=typeof endDate !=='number'||expenses.createdAt<=endDate;
      const textMatch=expenses.description.toLowerCase().includes(text.toLowerCase());
      return textMatch && startdateMatch&&enddatematch;
    }).sort((a,b)=>{
      if(sortBy==='date')
      {
          return a.createdAt<b.createdAt?1:-1;
      }
      else if(sortBy==='amount')
      {
          return a.amount<b.amount?1:-1;
      }
    })
}
// action call
store.subscribe(()=>{
    const state=store.getState();
    const viewData=visibleData(state.expense,state.filter);
    console.log(viewData);
});
const expenseOne=store.dispatch(addExpense({description:'bill',amount:100,createdAt:-100}));
const expenseTwo=store.dispatch(addExpense({description:'coffe',note:'starbucks',amount:500,createdAt:0}));
// store.dispatch(removeById({id:expenseOne.expenses.id}));
// store.dispatch(setTextFilter('____'));
// store.dispatch(editExpense(expenseOne.expenses.id,{description:"this is changed description"}));
// store.dispatch(sortByAmount());
// store.dispatch(sortBydate());
// store.dispatch(setStartDate(-125));
//  store.dispatch(setStartDate(1));
//  store.dispatch(setEndDate(12500));
// store.dispatch(setTextFilter('f'));
store.dispatch(sortByAmount())
// store.dispatch(setStartDate());




 const demoState={
     expense:[{
         id:"wgvfuw",
         description:"january-rent",
         note:"full payment of  this month ",
         amount:"54500",
         createdat:0
     }],
     filter:{
         text:"gvyug",
         sortBy:"date",//date oramount
         startBydate:undefined,
         endBydate:undefined

     }
     
 }
//  console.log(demoState);
const person={
    name:"dhruv",
    age:26
}
// console.log({...person,height:5.5})