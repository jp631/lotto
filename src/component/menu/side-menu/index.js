import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faCog, faCoins, faHome } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import './sideMenu.scss';

const SideMenu = () => {
    return (
        <div className='side-menu-container'>
            <div className='user-status'>
                <div>
                    <FontAwesomeIcon icon={faUserCog} />
                </div>
                <div>
                    Jack Ryan
               </div>
            </div>
            <div className='sub-side-menu'>
                <Link to='/'>
                    <FontAwesomeIcon icon={faHome} /> 
                    Home
                </Link>
                <Link to='/clients'>
                    <FontAwesomeIcon icon={faUserCog} /> 
                    Clients
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faCog} /> 
                    Other
                </Link>
            </div>
        </div>
    );
};

export default SideMenu;