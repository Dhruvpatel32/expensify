import React from 'react';


import {Link} from 'react-router-dom';


 

const Expenselist=({id,description,amount,createdAt})=>(
    <div>
        <Link to={`/editexpanse/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} ----{createdAt}</p>
        
    </div>
);

export default (Expenselist);