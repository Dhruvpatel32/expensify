import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
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
    <div>
        <Link to={`/editexpanse/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{numeral(amount).format('$0,0.00')} ----{moment(createdAt).format('MMMM Do, YYYY')}</p>
        
    </div>
);

export default (Expenselist);