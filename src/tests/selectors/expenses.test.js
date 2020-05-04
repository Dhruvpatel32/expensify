import moment from 'moment';
import visibleData from '../../selectors/expenses';

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
test('shoul filter by value  text given ',()=>{
    const filter={
     text:"e",
     sortBy:"date",
     startDate:undefined,
     endDate:undefined
    };
    const result=visibleData(expense,filter);
    expect(result).toEqual([expense[2],expense[1]]);
})
test('should filter by start date action call',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=visibleData(expense,filter);
    expect(result).toEqual([expense[2],expense[0]]);
})
test('should filter by end date action call',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(1,'day')
    }
    const result=visibleData(expense,filter);
    expect(result).toEqual([expense[0],expense[1]]);
})
test('should filter by date action call',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=visibleData(expense,filter);
    expect(result).toEqual([expense[2],expense[0],expense[1]]);
})
test('should filter by date action call',()=>{
    const filter={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=visibleData(expense,filter);
    expect(result).toEqual([expense[1],expense[2],expense[0]]);
})
