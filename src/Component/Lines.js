import React, { useState } from 'react';

function Lines({ user, setUser, attribute, placeholder }) {
    const [value, setVal] = useState(attribute);
    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                console.log(user);
                console.log(attribute);
                setVal(e.target.value);
            }}
        />
    );
}

export default Lines;
