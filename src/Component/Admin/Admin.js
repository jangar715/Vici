import React, { useState } from 'react';
import { useCol } from '../../Hooks/firebase';

function Admin() {
    const [header, setHeader] = useState('');
    const [information, setInformation] = useState('');
    const createContent = useCol('content').createRecord;
    const post = () => {
        console.log('sent!');
        createContent(header, { header, information });
    };
    return (
        <div className='h-vh-100 flex-center'>
            <input
                className='outl m-50'
                placeholder='header'
                value={header}
                onChange={(e) => setHeader(e.target.value)}
            />
            <input
                className='outl'
                placeholder='information'
                value={information}
                onChange={(e) => setInformation(e.target.value)}
            />
            <button onClick={post}>submit</button>
        </div>
    );
}

export default Admin;
