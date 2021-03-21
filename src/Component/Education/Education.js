import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { EducationItems } from '../Navbar/EducationItems';
import Lesson from './Lesson';
function Education() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-around ph-50 pv-20'>
                {EducationItems.map((el) => {
                    console.log(el);
                    return <Lesson name={el.name} path={el.path} />;
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Education;
