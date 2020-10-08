import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-sub-container'>
            <div className='header-contents'>Georgia <span className='lotto-num'> 03 04 02 04 </span></div>
            <div className='header-contents'>New York <span className='lotto-num'> 03 04 02 04 </span></div>
            </div>
        </div>
    );
};

export default Header;

