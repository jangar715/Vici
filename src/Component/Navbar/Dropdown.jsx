import React, { useState } from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom'
const Dropdown = ( {listName} ) => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    console.log(listName);
    return (
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {listName.map((item, index) => {
                    return(
                        < li key={index} >
                            <Link className={item.cName} to={item.path} onClick={()=> setClick=false}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown
