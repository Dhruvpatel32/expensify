import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortBydate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
class ExpenseListTextFilter extends React.Component{
    state={
        calendarFocused:null
    };
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange=(calendarFocused)=>{
       this.setState(()=>({calendarFocused})); 
    }
    render(){
        return (
            <div className="container">
            <div className="container_main">
            <div className="list_items">
            <input className="text-input" placeholder="Serch Expenses" type="text" value={this.props.filter.text} onChange={(e)=>{
              {this.props.dispatch(setTextFilter(e.target.value))}
            }}/>
            </div>
            <div className="list_items">
            <select className="select" vlaue={this.props.filter.sortBy} onChange={(e)=>{
                if(e.target.value==='date'){
                    this.props.dispatch(sortBydate())
                }
                else if(e.target.value==='amount'){
                    this.props.dispatch(sortByAmount())
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            </div>
            <div className="list_items">
            <DateRangePicker
               startDate={this.props.filter.startDate}
               endDate={this.props.filter.endDate}
               onDatesChange={this.onDatesChange}
               focusedInput={this.state.calendarFocused}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               showClearDates={true}
               isOutsideRange={()=>false}

           />
            </div> 
        </div>
        </div>
        )
    } 
}
const mapStateToProps=(state)=>{
    return {
        filter:state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListTextFilter)