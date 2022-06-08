import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    Chayanika
                </div>
                <span>toogle</span>
            </div>
             <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>PortFolio</li>
                    
                </ul>
            </div>
            <button className='button'>
                Contact Us
            </button>
            
        </div>

        </div>
       
    );
};

export default Navbar;