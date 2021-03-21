import React from 'react';
import Col from './Col';
import './footer.css';
import { Link } from 'react-router-dom';
import { FooterElements } from './FooterElements';

function Footer() {
    return (
        <div className='footer flex h-200 b-footer '>
            {FooterElements.map(({ title, path, elements }) => {
                console.log(title);
                return (
                    <Col>
                        <Link to={path} className='nounderline'>
                            <h1 className='header'>{title}</h1>
                            {elements.map((el) => (
                                <Link to={el.path} className='nounderline'>
                                    <div className='el'>{el.name}</div>
                                </Link>
                            ))}
                        </Link>
                    </Col>
                );
            })}
        </div>
    );
}

export default Footer;
