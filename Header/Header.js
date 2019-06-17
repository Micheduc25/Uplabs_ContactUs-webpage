import React from 'react';
import './header.scss';
import logo from '../images/logofinal.png';
const header=()=>{

    return(

        <div className="header">
            <div className="header--left">
                <div className='logo-wrapper'>

                    <div className='image--wrapper'>
                    <img className="logo" src={logo} alt='The logo of the page'/>
                    </div>

                    <div className='logo__caption--wrapper'>
                    <span className="logo-caption">Ayushi</span>
                    </div>

                </div>
               
            </div>
            <div className="header--right">
                <div className='list--wrapper'>
                <ul>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Sign In</a></li>
                    <li><a href='#'>Sign Up</a></li>
                </ul>
                </div>
            </div>
        </div>

    );
}

export default header;
