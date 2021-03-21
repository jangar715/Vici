import React from 'react';
import { Link } from 'react-router-dom';
import './Lesson.css';
function Lesson({ name, path }) {
    return (
        <Link
            to={path}
            className='lesson flex-center fs-24 ru text-center h-100 w-200 bradius-20 '
        >
            {name}
        </Link>
    );
}

export default Lesson;
