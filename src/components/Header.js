import {NavLink} from 'react-router-dom';
import React from 'react';
const Header =()=>(<div>
    <h1>Expensify</h1>
 <NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink>
 <NavLink to="/create" activeClassName="is-active">add</NavLink>
 <NavLink to="/editexpanse" activeClassName="is-active">Edit</NavLink>

</div>
);
export default Header;