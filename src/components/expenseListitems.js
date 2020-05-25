import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '₹'
    }
});
numeral.locale('fr');


const Expenselist=({id,description,amount,createdAt})=>(
    
        <Link to={`/editexpanse/${id}`} className="list_i">
        <div>
        <h3 className="list_i_t">{description}</h3>
        <span className="list_i_st">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list_i_d">{numeral(amount).format('$0,0.00')}</h3>
        
        </Link>
        
        
    
);

export default (Expenselist);