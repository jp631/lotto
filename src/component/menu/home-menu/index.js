import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserCog, faCoins} from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';

import { Link } from 'react-router-dom';

import './welcome-menuStyle.scss'
const HomeMenu = () => {
    return (
        <Zoom delay={300}>
        <div className='welcomeMenu-container'>
    <div className='item'>  
            <Link to='/'> <FontAwesomeIcon icon={faCoins} /> </Link> 
          </div>            
          <div className='item'>  
          <Link to='/clients' title='see uses'>  <FontAwesomeIcon icon={faUserCog} /></Link>
          </div>
            <div className='item'>
            <Link to='/' title=''>  <FontAwesomeIcon icon={faCog} /></Link>
            </div>
        </div>
        </Zoom>
    );
};

export default HomeMenu;