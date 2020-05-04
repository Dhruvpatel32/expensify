import React from 'react';
import {Link} from 'react-router-dom';

const notfound=()=>(
    <div>
        <h1>404!!!</h1>
        <Link to="/">go Home</Link>
    </div>
);
export default notfound;