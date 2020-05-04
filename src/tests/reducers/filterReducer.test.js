import filterReducer from '../../reducers/filterReducer';
import moment from 'moment';
test('should check filter reducer',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual(
        {
            text:"",
            sortBy:"date",
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
        }

    )
})

test('should check sort by amount filter',()=>{
    const state=filterReducer(undefined,{type:"SORT_BY_AMOUNT",})
    expect(state.sortBy).toBe('amount')
})
test('should check sort by date filter',()=>{
    const state=filterReducer(undefined,{type:"SORT_BY_DATE"})
    expect(state.sortBy).toBe('date')
})
test('should check set text filter',()=>{
    const state=filterReducer(undefined,{type:"setTextFilter",text:"e"})
    expect(state.text).toBe('e')
})
test('should check seleect start date ',()=>{
    const state=filterReducer(undefined,{type:"SELECT_START_DATE",startdate:moment(0)})
    expect(state.startDate).toEqual(moment(0))
})
test('should check  end  date filter',()=>{
    const state=filterReducer(undefined,{type:"SELECT_END_DATE",enddate:moment(0)})
    expect(state.endDate).toEqual(moment(0))
})
