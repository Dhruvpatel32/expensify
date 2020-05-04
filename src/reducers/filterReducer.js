import moment from 'moment';
const defaultfilterReducerstate={
    text:"",
    sortBy:"date",
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
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
   export default filterReducer;