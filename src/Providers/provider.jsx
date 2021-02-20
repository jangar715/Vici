import React, { createContext, useState } from 'react';
export const Context = createContext({
    informations: [],
    setInformations: () => {},
});
export const Provider = ({ children }) => {
    const [informations, setInformations] = useState([
        {
            header: 'Header1',
            information:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore doloremque, animi consectetur quasi commodi natus esse iusto soluta qui consequuntur expedita a! Rem quod aperiam est. Laborum, incidunt magnam?',
        },
        {
            header: 'Header2',
            information:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore doloremque, animi consectetur quasi commodi natus esse iusto soluta qui consequuntur expedita a! Rem quod aperiam est. Laborum, incidunt magnam?',
        },
        {
            header: 'Header3',
            information:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore doloremque, animi consectetur quasi commodi natus esse iusto soluta qui consequuntur expedita a! Rem quod aperiam est. Laborum, incidunt magnam?',
        },
        {
            header: 'Header4',
            information:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore doloremque, animi consectetur quasi commodi natus esse iusto soluta qui consequuntur expedita a! Rem quod aperiam est. Laborum, incidunt magnam?',
        },
    ]);

    return (
        <Context.Provider value={{ informations, setInformations }}>
            {children}
        </Context.Provider>
    );
};
