import React, { useState } from 'react';

const Input = (props) => {
    const { className, ...others } = props;
    return <input className={`input ${className}`} {...others} />;
};

export default Input;
