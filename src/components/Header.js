import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {startlogout} from "../actions/auth";
 export const Header =({startlogout})=>(

   <header className="header">
  <div className="container_h">
  <Link to="/dashbord" classname="main_h" >  
 <data className="header_l">Expensify</data>
 </Link>
   <button onClick={startlogout} className="button_h">Log out</button>  
   
  </div>  
 
 </header>


);
const mapDispatchToProps=(dispatch)=>({
    startlogout :()=>dispatch(startlogout())
});
export default connect(undefined,mapDispatchToProps)(Header);

