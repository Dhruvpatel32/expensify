import {NavLink} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {startlogout} from "../actions/auth";
 export const Header =({startlogout})=>(
 <header>
      
    <h1>Expensify</h1>
 <NavLink to="/dashbord" activeClassName="is-active" >home</NavLink>
 <NavLink to="/create" activeClassName="is-active">add</NavLink>
 <NavLink to="/editexpanse" activeClassName="is-active">Edit</NavLink>
<button onClick={startlogout}>Log out</button>

 </header>

);
const mapDispatchToProps=(dispatch)=>({
    startlogout :()=>dispatch(startlogout())
});
export default connect(undefined,mapDispatchToProps)(Header);