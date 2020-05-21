import React from 'react';
import {connect} from 'react-redux';
import {startlogin} from '../actions/auth'
export const loginpage =({startlogin})=>{
    return (
        <div>
            <button onClick={startlogin}>Login</button>
        </div>
    )
}

const mapDispatchTOProps=(dispatch)=>({
    startlogin: ()=>dispatch(startlogin())
})

export default connect(undefined,mapDispatchTOProps)(loginpage);