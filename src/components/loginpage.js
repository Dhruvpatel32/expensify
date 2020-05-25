import React from 'react';
import {connect} from 'react-redux';
import {startlogin} from '../actions/auth'
export const loginpage =({startlogin})=>{
    return (
        <div className="box-layout">
           <div className="box-layout__box">
           <p className="title">Expensify</p>
            <p className="para">let's manage our daily expense...</p>
            <button onClick={startlogin} className="button">Login With Google</button>
           </div>
        </div>
    )
}

const mapDispatchTOProps=(dispatch)=>({
    startlogin: ()=>dispatch(startlogin())
})

export default connect(undefined,mapDispatchTOProps)(loginpage);