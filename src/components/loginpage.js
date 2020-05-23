import React from 'react';
import {connect} from 'react-redux';
import {startlogin} from '../actions/auth'
export const loginpage =({startlogin})=>{
    return (
        <div className="box-layout">
           <div className="box-layout__box">
           <h1>ExpensifyApp</h1>
            <p>let's manage our daily expense</p>
            <button onClick={startlogin}>Login</button>
           </div>
        </div>
    )
}

const mapDispatchTOProps=(dispatch)=>({
    startlogin: ()=>dispatch(startlogin())
})

export default connect(undefined,mapDispatchTOProps)(loginpage);