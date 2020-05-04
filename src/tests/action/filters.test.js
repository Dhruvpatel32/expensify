import {setStartDate,setEndDate,sortByAmount,sortBydate,setTextFilter} from '../../actions/filters';
import moment from 'moment';
 test('test for setstartDate action call',()=>{
     const action=setStartDate(moment(0));
     expect(action).toEqual({
         type:"SELECT_START_DATE",
         startdate:moment(0)
     })
 })
 test('test for setendDate action call',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:"SELECT_END_DATE",
        enddate:moment(0)
    })
})
test('test for sortByAmount action call',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})
test('test for sortBydate action call',()=>{
    const action=sortBydate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})
test('test for setTextFilter action call',()=>{
    const action=setTextFilter("heyy..");
    expect(action).toEqual({
        type:"setTextFilter",
        text:"heyy.."
    })
})
test('test for setTextFilter default action call',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"setTextFilter",
        text:""
    })
})

