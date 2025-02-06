import React from 'react';
import { useLocation } from 'react-router-dom';

function Formdetail(props) {
    const a = useLocation();

    const getparam = new URLSearchParams(a.search).get('usr')
    const getparam2 = new URLSearchParams(a.search).get('usr')

    const d = a.state;

    console.log(getparam);
    return (
        <div>
            <p>{d.name}</p>
            <p>{d.email}</p>
            <p>{d.pass}</p>
        </div>
    );
}

export default Formdetail;