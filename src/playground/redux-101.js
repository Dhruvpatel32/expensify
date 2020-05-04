import {createStore} from 'redux';

const increamentBy=({increasedby=1}={})=>({
    type:'INCREMENT',
    increasedby
})
const store=createStore((state= {count :0},action)=>{

    switch (action.type){
        case 'INCREMENT':
           
            return ({
                count :state.count + action.increasedby
            });
        case 'DECREMENT':
            return({
                count :state.count -1
            });    
        case 'RESET' :
            return ({
                count : 0
            })    
        default :
         return state;
            
    }
})
 
store.subscribe(()=>{
     console.log(store.getState());
})

store.dispatch(increamentBy(({increasedby : 10})));
store.dispatch(increamentBy(({})));
   
// store.dispatch({
//     type:"INCREMENT"
// })
// store.dispatch({
//     type :"RESET"
// })
// store.dispatch({
//     type :"DECREMENT"
// })



console.log(store.getState());