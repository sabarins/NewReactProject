import React, { createContext, useState } from 'react';

const Formdata = createContext();

const ContextData = ({child}) => {

    const [formdatas,setFormdatas] = useState([]);

    return (
        <div>
            <Formdata.Provider value={{formdatas,setFormdatas}}>
                {child}
            </Formdata.Provider>
        </div>
    );
};

export default ContextData;